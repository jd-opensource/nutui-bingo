import { App } from 'vue';
import Luckdraw from './__VUE/luckdraw/index.vue';
import Luckmarquee from './__VUE/luckmarquee/index.vue';
import Lucknine from './__VUE/lucknine/index.vue';
import Luckscratch from './__VUE/luckscratch/index.vue';
import Luckgiftbox from './__VUE/luckgiftbox/index.vue';
import lottoRoll from './__VUE/lottoroll/index.vue';
import Luckshake from './__VUE/luckshake/index.vue';

function install(app: App) {
  const packages = [Luckdraw,Luckmarquee,Lucknine,Luckscratch,Luckgiftbox,lottoRoll,Luckshake];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export { install, Luckdraw,Luckmarquee,Lucknine,Luckscratch,Luckgiftbox,lottoRoll,Luckshake  };
export default { install, version:'0.0.1'};