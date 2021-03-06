import { IPayPalUrlConfig } from '../models/paypal-models';
import { ScriptService } from './script.service';
export declare class PayPalScriptService {
    protected scriptService: ScriptService;
    private readonly paypalWindowName;
    constructor(scriptService: ScriptService);
    registerPayPalScript(config: IPayPalUrlConfig, onReady: (payPalApi: any) => void): void;
    destroyPayPalScript(): void;
    private getUrlForConfig;
    private getQueryString;
}
