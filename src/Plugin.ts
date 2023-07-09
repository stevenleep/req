export interface PluginDefine {
    /**
     * on register plugin
     */
    onRegister: (context) => void;

    /**
     * Called after the plug-in has been initialized
     * You can get the context by this.getContext() and do more (you can customize it)
     */
    onInit: () => void;

    /**
     * Before sending the request (before the request is sent, you can modify the request)
     */
    onBeforeRequest: (request) => void;
    
    /**
     * Between onBeforeRequest and onRequest,
     * if a mock identity is provided in onMockRequest,
     * it will respond directly to onResponse as simulated data
     */
    onMockRequest: (request) => void;

    /**
     * Send request
     */
    onRequest: (request) => void;

    // Timeout/Abort/NetworkError/CustomerError/ServerError
    onError: (error) => void;

    /**
     * Retry request
     */
    onRetry: (request) => void;

    /**
     * Cancel request (abort｜CancelToken.cancel)
     */
    onCancel: (request) => void;
    
    /**
     * After receiving the response (you can modify the response)
     */
    onResponse: (response) => Promise<any> | void;

    /**
     * after all
     */
    onFinally: (response) => void;

    /**
     * destroy
     */
    destroy: () => void;
}

export interface Plugin extends Partial<PluginDefine> {}
export type PluginLifecycle = keyof PluginDefine;

export default function Plugin() {}