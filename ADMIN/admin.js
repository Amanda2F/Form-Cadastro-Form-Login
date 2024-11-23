const tableBody = document.querySelector("#users-table tbody");
        const loading = document.getElementById("loading");
        const token = localStorage.getItem("authToken");

        // Verifica se o token está presente
        if (!token) {
            alert("Você precisa estar logado como administrador.");
            window.location.href = "/login.html";
        } else if (token) {
            const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica o payload
            if (payload.role !== 'admin') {
                alert("Você não tem permissão para acessar esta página.");
                window.location.href = "/pagina_inicial/index.html";
            }
        }

        // Função para buscar e listar usuários
        async function loadUsers() {
            loading.style.display = "block";
            try {
                const response = await fetch("http://localhost:8080/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log("Resposta da API:", data); // Verifique a estrutura aqui
                    displayUsers(data.users || []);
                } else {
                    alert("Erro ao carregar usuários. Verifique suas permissões.");
                }
            } catch (error) {
                console.error("Erro:", error);
                alert("Erro ao conectar com o servidor.");
            } finally {
                loading.style.display = "none";
            }
        }

        // Exibe os usuários na tabela
        function displayUsers(users) {
            tableBody.innerHTML = ""; // Limpa a tabela antes de popular
            users.forEach((user) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>
                        <select onchange="updateUserRole('${user.id}', this.value)">
                            <option value="user" ${user.role === "user" ? "selected" : ""}>User</option>
                            <option value="admin" ${user.role === "admin" ? "selected" : ""}>Admin</option>
                        </select>
                    </td>
                    <td>
                        <button onclick="deleteUser('${user.id}')">Deletar</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        }

        // Função para atualizar a role do usuário
        async function updateUserRole(userId, newRole) {
            try {
                const response = await fetch(`http://localhost:8080/users/${userId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ role: newRole }),
                });

                if (response.ok) {
                    alert("Role do usuário atualizada com sucesso!");
                } else {
                    alert("Erro ao atualizar role do usuário.");
                }
            } catch (error) {
                console.error("Erro:", error);
                alert("Erro ao conectar com o servidor.");
            }
        }

        // Função para deletar um usuário
        async function deleteUser(userId) {
            if (!confirm("Tem certeza que deseja deletar este usuário?")) return;

            try {
                const response = await fetch(`http://localhost:8080/users/${userId}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    alert("Usuário deletado com sucesso!");
                    loadUsers(); // Recarrega a lista de usuários
                } else {
                    alert("Erro ao deletar usuário.");
                }
            } catch (error) {
                console.error("Erro:", error);
                alert("Erro ao conectar com o servidor.");
            }
        }

        // Carregar usuários ao abrir a página
        loadUsers();