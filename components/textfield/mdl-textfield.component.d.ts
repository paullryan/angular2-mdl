import { Renderer, ElementRef, OnChanges, DoCheck, OpaqueToken } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const DISABLE_NATIVE_VALIDITY_CHECKING: OpaqueToken;
export declare class MdlTextFieldComponent implements ControlValueAccessor, OnChanges, DoCheck {
    private renderer;
    private elmRef;
    private nativeCheckGlobalDisabled;
    private value_;
    private el;
    private blurEmitter;
    private focusEmitter;
    private inputEl;
    value: any;
    type: any;
    label: any;
    pattern: any;
    name: any;
    id: string;
    errorMessage: any;
    disabled: boolean;
    required: boolean;
    autofocus: boolean;
    isFloatingLabel: boolean;
    placeholder: string;
    rows: number;
    maxrows: number;
    icon: string;
    disableNativeValidityChecking: any;
    constructor(renderer: Renderer, elmRef: ElementRef, nativeCheckGlobalDisabled: Boolean);
    writeValue(value: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnChanges(): void;
    ngDoCheck(): void;
    protected setFocus(): void;
    protected onFocus(event: FocusEvent): void;
    protected onBlur(event: FocusEvent): void;
    private checkDisabled();
    private checkValidity();
    private checkDirty();
    keydownTextarea($event: KeyboardEvent): void;
}
/** @deprecated */
export declare const MDL_TEXT_FIELD_DIRECTIVES: typeof MdlTextFieldComponent[];
export declare class MdlTextFieldModule {
}
