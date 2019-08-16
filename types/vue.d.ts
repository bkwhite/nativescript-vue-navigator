import Vue, { ComponentOptions } from "vue";
import Navigator from "./index";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    navigator?: Navigator<any>;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $navigator: Store<any>;
  }
}