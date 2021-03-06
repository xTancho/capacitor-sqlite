export declare class DatabaseSQLiteHelper {
    isOpen: boolean;
    private _db;
    private _databaseName;
    private _utils;
    constructor(dbName: string);
    private _openDB;
    close(databaseName: string): Promise<boolean>;
    exec(statements: string): Promise<number>;
    run(statement: string, values: Array<any>): Promise<number>;
    query(statement: string, values: Array<any>): Promise<Array<any>>;
    deleteDB(dbName: string): Promise<boolean>;
}
