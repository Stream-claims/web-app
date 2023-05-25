import {App} from "aws-cdk-lib";
import { AWSAdapterStack } from 'sveltekit-adapter-aws';

const app = new App();

new AWSAdapterStack(app, 'stream-auth');

