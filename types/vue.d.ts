
import Vue from 'nativescript-vue'
import Navigator from "./index";

/*
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    navigator?: Navigator<any>;
  }
}
*/

declare module "nativescript-vue/index" {
  interface NativeScriptVue {
    $navigator: () => void;
  }
}