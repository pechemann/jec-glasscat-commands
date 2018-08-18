/*!
 * JEC GlassCat Commands Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <http://jecproject.org>
 */

declare module "jec-glasscat-commands" {

import { Logger } from "jec-commons";

export class CommandManager {    constructor();    private static INSTANCE;    private static _locked;    static getInstance(): CommandManager;    private _logger;    private static readonly LOG_CONTEXT;    execute(command: ScriptCommand, callback?: (err: GlassCatCommandError) => void): void;}export abstract class AbstractScriptCommand implements ScriptCommand {    constructor();    protected __logger: Logger;    execute(argv: any, callback: (success?: any, err?: any) => void): void;    setLogger(logger: Logger): void;    getHelp(argv: any): CommandDescriptor;}export class CommandDescriptor {    constructor();    name: string;    description: string;    parameters: ParameterDescriptor[];}export class ParameterDescriptor {    constructor();    name: string;    description: string;    type: string;    required: boolean;}export class GlassCatCommandError extends Error {    constructor(message: string, originalStack: string);    private _originalStack;    private initObj;    getStack(): string;}export class BuildArchetype extends AbstractScriptCommand implements ScriptCommand {    constructor();    private buildProcessor;    private buildRequest;    execute(argv: any, callback: (success?: any, err?: any) => void): void;    getHelp(argv: any): CommandDescriptor;}export class CreateRole extends AbstractScriptCommand implements ScriptCommand {    constructor();    private createTemplate;    execute(argv: any, callback: (success?: any, err?: any) => void): void;    getHelp(argv: any): any;}export class GetLocales extends AbstractScriptCommand implements ScriptCommand {    constructor();    execute(argv: any, callback: (success?: any, err?: any) => void): void;    getHelp(argv: any): any;}export interface ScriptCommand {    execute(argv: any, callback: (success?: any, err?: any) => void): void;    setLogger(logger: Logger): void;    getHelp(argv: any): CommandDescriptor;}export class CommandDescriptorBuilder {    constructor();    build(name: string, description: string, parameters?: ParameterDescriptor[]): CommandDescriptor;}export class CommandHelpFormatter {    constructor();    format(command: CommandDescriptor): string;}export class ParameterDescriptorBuilder {    constructor();    build(name: string, description: string, type: string, required?: boolean): ParameterDescriptor;}}