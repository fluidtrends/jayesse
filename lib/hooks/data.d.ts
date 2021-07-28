export declare const useData: () => {
    working: boolean;
    user: any;
    findUser: (username: string, login: boolean) => Promise<void>;
    results: any;
    register: (username: string, password: string) => Promise<void>;
    socket: any;
    status: string;
    put: (id: string, data: any) => Promise<void>;
    get: (id: string) => Promise<any>;
    isLoggedIn: boolean;
    login: (username: string, password: string) => Promise<void>;
    ready: boolean;
    getJSONDoc: (hash: string) => Promise<any>;
    getDoc: (hash: string) => Promise<string>;
    logout: () => Promise<void>;
};
