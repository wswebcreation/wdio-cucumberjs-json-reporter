import { Argument, Tag } from '@wdio/reporter';
import { WriteStream } from 'fs';
import { cjson_metadata } from '../models';

declare module '@wdio/types' {
  export namespace Capabilities {
    export interface W3CCapabilities {
      cjson_metadata?: cjson_metadata;
      testobject_app_id?: string;
      app?: string;
    }
    export interface DesiredCapabilities {
      cjson_metadata?: cjson_metadata;
      testobject_app_id?: string;
      app?: string;
    }
  }

  export namespace Options {
    export interface Testrunner {
      jsonFolder?: string;
      language?: string;
      cjson_metadata?: cjson_metadata;
      logFile?: string;
      stdout?: boolean;
      writeStream?: WriteStream;
    }
    export interface WebdriverIO {
      app?: string;
      requestedCapabilities?: {
        cjson_metadata?: cjson_metadata;
        w3cCaps: {
          alwaysMatch: {
            foo?: true;
          };
        };
      };
    }
  }
}

declare module '@wdio/reporter' {
  export interface WDIOReporterBaseOptions {
    jsonFolder: string;
    language: string;
  }

  export interface HookStats {
    description?: string;
    tags?: string[] | Tag[] | string;
    keyword: string;
    argument?: Argument;
    // state?: 'failed' | 'passed' | 'pending';
  }

  export interface TestStats {
    description?: string;
    tags?: string[] | Tag[] | string;
    keyword?: string;
    foo?: string | boolean;
    bar?: boolean;
  }

  export interface RunnerStats {
    metadata?: {
      foo?: string;
    };
  }
}

// declare module 'webdriverio' {
// //   export namespace sync {
//   export interface WebdriverIOSync{
//     test?: string;
//   }
// //   }
// }