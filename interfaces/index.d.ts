declare global {
    interface Window {
        ethereum: any
    }
}

export interface IProviderProps  {
    children: ReactNode
}