import { Icon } from 'vant'
import scroller from "@/common/scroller/scroller";
import { FetchGet, FetchPost } from '@/common/fetch'
export default {
    install(Vue) {
        Vue.use(Icon);
        Vue.component(scroller.name, scroller);
        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}