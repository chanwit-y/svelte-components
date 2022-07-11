/** @typedef {typeof __propDef.props}  TestProps */
/** @typedef {typeof __propDef.events}  TestEvents */
/** @typedef {typeof __propDef.slots}  TestSlots */
export default class Test extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TestProps = typeof __propDef.props;
export type TestEvents = typeof __propDef.events;
export type TestSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
