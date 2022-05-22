<template><p>单个属性添加自定义属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//aluse为自定义属性</span>
<span class="token operator">&lt;</span>button aluser<span class="token operator">=</span><span class="token string">"nihao"</span> ref<span class="token operator">=</span><span class="token string">"qita"</span><span class="token operator">></span>
在methos中定义方法通过 ref获取
<span class="token literal-property property">methos</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token function">getdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//在当前页面获取</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$ref<span class="token punctuation">.</span>qita<span class="token punctuation">.</span>$attrs<span class="token punctuation">.</span>aluser
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue自定义指令</p>
<p><a href="https://cn.vuejs.org/v2/guide/custom-directive.html" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a></p>
<p>js的setattribute</p>
<p>obj 传递当前标签属性</p>
<p>vue中的点击事件会触发两次，INPUT和label ，一般加一个事件判断就可以防止两次点击，if(event.target.tabName==&quot;INPUT&quot;){return}</p>
<div id="itany">
    <my-a></my-a>
    <my-b></my-b>
    <my-c></my-c>
</div>
<template id="a">
  <div>
    <h3>A组件：{{name}}</h3>
    <button @click="send">将数据发送给C组件</button>
  </div>
</template>
<template id="b">
  <div>
    <h3>B组件：{{age}}</h3>
    <button @click="send">将数组发送给C组件</button>
  </div>
</template>
<template id="c">
  <div>
    <h3>C组件：{{name}}，{{age}}</h3>
  </div>
</template>
<p>em:相对父组件的大小</p>
<p>rem：相对于html根组件的大小</p>
<p>px：固定像素大小</p>
<p>获取每一个check的高度，将高度传给 el-options,将options height =binddatas.length * check高度</p>
<p>vue中的 ref和css中的id是一致的，都是唯一属性</p>
<p>CTRL shift +R全局替换字符</p>
<p>下午汇报：</p>
<p>一、今天完成任务：对之前写的发现的问题进行了修改，并且对组件数据传递进行开发了20%，大概完成了整体的50%</p>
<p><strong>二</strong>、这周总结：</p>
<ol>
<li>
<p>个人：</p>
<p>1这周主要是了解项目，然后了解vue以及element组件相关知识，时间比大概是50%，50%,其中了解项目大概基本没什么效率可言，vue和element的话，大概能使用一些基本用法，效率相对而言要高很多</p>
<p>1效率不高，特别是在自己看项目那一段时间，自己有点不知所措。不知道从哪里看，看的目的是什么，应该主要是了解那一块，我开发的地方是那一块，这些都很模糊</p>
<p>2主要还是对业务流程不清楚，导致我对整个项目的流程板块，以及各个环节的关键信息都了解不清楚，比如，接口数据，数据库，界面风格，需求文档</p>
<p>3代码熟练度不高，开发速度慢</p>
</li>
<li>
<p>其他因素：</p>
<p>1疫情期间，很多问题不好沟通，</p>
<p>2亚男姐那个项目进度比较赶，我这边她可能顾及不到那么多 ，而且能得到的信息也很少</p>
<p>3因为那个网络不稳定，看了解项目流程的时候老是断掉，影响效率</p>
</li>
</ol>
<p>​	3.对我个人来说的话，只要知道了流程，编码的话，我相信在后面会慢慢接近亚男姐她们的。</p>
<p><strong>三</strong>、下个星期的话目标是去了解 vue的一些高级用法和常用的用法，同时也巩固下那些基础的，然后完成亚男姐给我的任务。</p>
<p>1、A中使用 <component  :is="组件id">,默认id是B</p>
<p>2、B，C都是组件id的一种</p>
<p>3、当前是B,我点击下一步，id切换到C，当前页面就是C</p>
<p>4、我想让B组件传值dao</p>
</template>

<script>
var Event = new Vue();//定义一个空的Vue实例
var A = {
    template: '#a',
    data() {
      return {
        name: 'tom'
      }
    },
    methods: {
      send() {
        Event.$emit('data-a', this.name);
      }
    }
}


var B = {
    template: '#b',
    data() {
      return {
        age: 20
      }
    },
    methods: {
      send() {
        Event.$emit('data-b', this.age);
      }
    }
}
var C = {
    template: '#c',
    data() {
      return {
        name: '',
        age: ""
      }
    },
    mounted() {//在模板编译完成后执行
     Event.$on('data-a',name => {
         this.name = name;//箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
     })
     Event.$on('data-b',age => {
         this.age = age;
     })
    }
}
var vm = new Vue({
    el: '#itany',
    components: {
      'my-a': A,
      'my-b': B,
      'my-c': C
    }
});    
</script>
