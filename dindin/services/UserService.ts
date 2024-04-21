import DbService from './DbService';

class UserService {
    private dbService: DbService;

    constructor() {
        this.dbService = new DbService();
    }

    getColumns(): string {
        return 'id, name, cpf, email, password';
    }

    createUser(user: any): void {
        // Lógica para criar um novo usuário no banco de dados
        this.dbService.insert('users', this.getColumns(), user);
    }

    updateUser(userId: string, updatedUser: any): void {
        // Lógica para atualizar um usuário existente no banco de dados
        this.dbService.update('users', userId, updatedUser);
    }

    updatePassword(email: string, newPassword: string): void {
        // Lógica para atualizar a senha de um usuário no banco de dados
        const whereStatement = `email = ${email}`;
        const newPassworStatement = `password = ${newPassword}`;
        this.dbService.update('users', newPassworStatement, whereStatement);
    }

    deleteUser(userId: string): void {
        // Lógica para excluir um usuário do banco de dados
        this.dbService.delete('users', userId);
    }

    getUser(userId: string): any {
        // Lógica para obter um usuário do banco de dados
        return this.dbService.select('users', userId);
    }

    login(email: string, password: string): any {
        // Lógica para realizar o login do usuário
        const user = this.dbService.select('users', this.getColumns(), `WHERE email = '${email}' AND password = '${password}'`);
        if (user) {
            return user;
        } else {
            throw new Error('Usuário não encontrado');
        }
    }

    logout(): void {
        // Lógica para realizar o logout do usuário
        console.log('Usuário deslogado');
    }
}

export default UserService;