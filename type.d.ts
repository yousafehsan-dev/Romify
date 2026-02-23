interface AuthState {
    isSignedIn: boolean;
    userName: string | null;
    userId: string | null;
}

type AuthContext = {
    isSignedIn: boolean;
    userName: string  | null,
    userId : string | null,
    refreshAuth: () => promise<boolean>;
    signeOut: ()=> promise<boolean>;
    signedIN: ()=> Promise<boolean>;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}
