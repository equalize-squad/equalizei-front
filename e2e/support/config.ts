import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {CallbackStepDefinition} from 'cucumber';
chai.use(chaiAsPromised);

export { IWorld, World } from '../support/world';
export var expect = chai.expect;
export type Callback = CallbackStepDefinition;
