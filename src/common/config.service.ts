import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
    private readonly envConfig: Record<string, string>;

    constructor() {
        this.envConfig = dotenv.parse(fs.readFileSync('.env'));
    }

    /**
     *
     * Returns value from config by it key
     * @param {string} key
     * @returns {string}
     *
     * @memberOf ConfigService
     */
    public get(key: string): string {
        return this.envConfig[key];
    }
}
