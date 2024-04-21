import * as SQLite from 'expo-sqlite';

class DbService {
    db = SQLite.openDatabase('dindin.db');

    executeSql = (sql: string, params: any[] = []): Promise<any> => {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(sql, params, (_, { rows }) => resolve(rows._array), (_, error) => {
                    reject(error);
                    return false;
                });
            });
        });
    }

    createTable = (tableName: string, columns: string): Promise<any> => {
        return this.executeSql(`CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`);
    }

    insert = (tableName: string, columns: string, values: string): Promise<any> => {
        return this.executeSql(`INSERT INTO ${tableName} (${columns}) VALUES (${values})`);
    }

    update = (tableName: string, set: string, where: string): Promise<any> => {
        return this.executeSql(`UPDATE ${tableName} SET ${set} WHERE ${where}`);
    }

    delete = (tableName: string, where: string): Promise<any> => {
        return this.executeSql(`DELETE FROM ${tableName} WHERE ${where}`);
    }

    select = (tableName: string, columns: string, where: string = ''): Promise<any> => {
        return this.executeSql(`SELECT ${columns} FROM ${tableName} ${where ? `WHERE ${where}` : ''}`);
    }
}

export default DbService;