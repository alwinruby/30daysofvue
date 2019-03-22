Vue.component('tweet-component', {
 template: `
 <div class="tweet">
 <div class="box">
 <article class="media">
 <div class="media-left">
 <figure class="image is-64x64">
 <img :src="tweet.img">
 </figure>
 </div>
 <tweet-content :tweet="tweet"></tweet-content>
 </article>
 </div>
 <div class="control has-icons-left">
 <input class="input is-small"
 placeholder="Tweet your reply..." />
 <span class="icon is-small is-left">
 <i class="fas fa-envelope"></i>
 </span>
 </div>
 </div>
 `,
 props: ['tweet']
});
