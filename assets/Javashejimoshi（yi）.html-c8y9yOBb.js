import{_ as n,o as s,c as a,e as p}from"./app-mCh2OnfA.js";const t={},e=p(`<h1 id="面向对象设计原则" tabindex="-1"><a class="header-anchor" href="#面向对象设计原则" aria-hidden="true">#</a> 面向对象设计原则</h1><p>**注意：**推荐完成JavaEE通关路线再开始学习。</p><p>我们在进行软件开发时，不仅仅需要将最基本的业务给完成，还要考虑整个项目的可维护性和可复用性，我们开发的项目不单单需要我们自己来维护，同时也需要其他的开发者一起来进行共同维护，因此我们在编写代码时，应该尽可能的规范。如果我们在编写代码时不注重这些问题，整个团队项目就像一座屎山，随着项目的不断扩大，整体结构只会越来越遭。</p><p>甚至到最后你会发现，我们的程序居然是稳定运行在BUG之上的...</p><p>所以，为了尽可能避免这种情况的发生，我们就来聊聊面向对象设计原则。</p><h2 id="单一职责原则" tabindex="-1"><a class="header-anchor" href="#单一职责原则" aria-hidden="true">#</a> 单一职责原则</h2><p>单一职责原则（Simple Responsibility Pinciple，SRP）是最简单的面向对象设计原则，它用于控制类的粒度大小。</p><blockquote><p>一个对象应该只包含单一的职责，并且该职责被完整地封装在一个类中。</p></blockquote><p>比如我们现在有一个People类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//一个人类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 人类会编程
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;int mian() {&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;   printf(\\&quot;Holle Wrold!\\&quot;);&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;啊嘞，怎么运行不起？明明照着老师敲的啊&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 工厂打螺丝也会
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;真开心，能进到富土康打螺丝&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;诶，怎么工友都提桶跑路了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 送外卖也会
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ride</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;今天终于通过美团最终面，加入了梦寐以求的大厂了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;感觉面试挺简单的，就是不知道为啥我同学是现场做一道力扣接雨水，而我是现场问会不会骑车&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;（迫不及待穿上外卖服装）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到，这个People类可以说是十八般武艺样样精通了，啥都会，但是实际上，我们每个人最终都是在自己所擅长的领域工作，所谓闻道有先后，术业有专攻，会编程的就应该是程序员，会打螺丝的就应该是工人，会送外卖的应该是骑手，显然这个People太过臃肿（我们需要修改任意一种行为都需要修改People类，它拥有不止一个引起它变化的原因），所以根据单一职责原则，我们下需要进行更明确的划分，同种类型的操作我们一般才放在一起：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Coder</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 程序员会编程
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;int mian() {&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;   printf(\\&quot;Hello World!\\&quot;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;啊嘞，怎么运行不起？明明照着老师敲的啊&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Worker</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 工人会打螺丝
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;真开心，能进到富土康打螺丝&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;诶，怎么工友都提桶跑路了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Rider</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 骑手会送外卖
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ride</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;今天终于通过美团最终面，加入了梦寐以求的大厂&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;感觉面试挺简单的，就是不知道为啥我同学是现场做一道力扣接雨水，我是现场问会不会骑车&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;（迫不及待穿上外卖服装）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将类的粒度进行更近一步的划分，这样就很清晰了，包括我们以后在设计Mapper、Service、Controller等等，根据不同的业务进行划分，都可以采用单一职责原则，以它作为我们实现高内聚低耦合的指导方针。实际上我们的微服务也是参考了单一职责原则，每个微服务只应担负一个职责。</p><h2 id="开闭原则" tabindex="-1"><a class="header-anchor" href="#开闭原则" aria-hidden="true">#</a> 开闭原则</h2><p>开闭原则（Open Close Principle）也是重要的面向对象设计原则。</p><blockquote><p>软件实体应当对扩展开放，对修改关闭。</p></blockquote><p>一个软件实体，比如类、模块和函数应该对扩展开放，对修改关闭。其中，对扩展开放是针对提供方来说的，对修改关闭是针对调用方来说的。</p><p>比如我们的程序员分为Java程序员、C#程序员、C艹程序员、PHP程序员、前端程序员等，而他们要做的都是去打代码，而具体如何打代码是根据不同语言的程序员来决定的，我们可以将程序员打代码这一个行为抽象成一个统一的接口或是抽象类，这样我们就满足了开闭原则的第一个要求：对扩展开放，不同的程序员可以自由地决定他们该如何进行编程。而具体哪个程序员使用什么语言怎么编程，是自己在负责，不需要其他程序员干涉，所以满足第二个要求：对修改关闭，比如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Coder</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">class</span> <span class="token class-name">JavaCoder</span> <span class="token keyword">extends</span> <span class="token class-name">Coder</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Java太卷了T_T，快去学Go吧！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">PHPCoder</span> <span class="token keyword">extends</span> <span class="token class-name">Coder</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;PHP是世界上最好的语言&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">C</span>艹<span class="token class-name">Coder</span> <span class="token keyword">extends</span> <span class="token class-name">Coder</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;笑死，Java再牛逼底层不还得找我？&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过提供一个Coder抽象类，定义出编程的行为，但是不进行实现，而是开放给其他具体类型的程序员来实现，这样就可以根据不同的业务进行灵活扩展了，具有较好的延续性。</p><p>不过，回顾我们这一路的学习，好像处处都在使用开闭原则。</p><h2 id="里氏替换原则" tabindex="-1"><a class="header-anchor" href="#里氏替换原则" aria-hidden="true">#</a> 里氏替换原则</h2><p>里氏替换原则（Liskov Substitution Principle）是对子类型的特别定义。它由芭芭拉·利斯科夫（Barbara Liskov）在1987年在一次会议上名为 &quot;数据的抽象与层次&quot; 的演说中首先提出。</p><blockquote><p>所有引用基类的地方必须能透明地使用其子类的对象。</p></blockquote><p>简单的说就是，子类可以扩展父类的功能，但不能改变父类原有的功能：</p><ol><li>子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法。</li><li>子类可以增加自己特有的方法。</li><li>当子类的方法重载父类的方法时，方法的前置条件（即方法的输入/入参）要比父类方法的输入参数更宽松。</li><li>当子类的方法实现父类的方法时（重写/重载或实现抽象方法），方法的后置条件（即方法的输出/返回值）要比父类更严格或与父类一样。</li></ol><p>比如我们下面的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Coder</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我会打代码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">class</span> <span class="token class-name">JavaCoder</span> <span class="token keyword">extends</span> <span class="token class-name">Coder</span><span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**
         * 子类除了会打代码之外，还会打游戏
         */</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;艾欧尼亚最强王者已上号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到JavaCoder虽然继承自Coder，但是并没有对父类方法进行重写，并且还在父类的基础上进行额外扩展，符合里氏替换原则。但是我们再来看下面的这个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Coder</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我会打代码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">class</span> <span class="token class-name">JavaCoder</span> <span class="token keyword">extends</span> <span class="token class-name">Coder</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;艾欧尼亚最强王者已上号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * 这里我们对父类的行为进行了重写，现在它不再具备父类原本的能力了
         */</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我寒窗苦读十六年，到最后还不如培训班三个月出来的程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;想来想去，房子车子结婚彩礼，为什么这辈子要活的这么累呢？&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;难道来到这世间走这一遭就为了花一辈子时间买个房子吗？一个人不是也能活的轻松快乐吗？&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;摆烂了，啊对对对&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
          	<span class="token comment">//好了，emo结束，继续卷吧，人生因奋斗而美丽，这个世界虽然满目疮痍，但是还是有很多美好值得期待</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，现在我们对父类的方法进行了重写，显然，父类的行为已经被我们给覆盖了，这个子类已经不具备父类的原本的行为，很显然违背了里氏替换原则。</p><p>要是程序员连敲代码都不会了，还能叫做程序员吗？</p><p>所以，对于这种情况，我们不需要再继承自Coder了，我们可以提升一下，将此行为定义到People中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//这个行为还是定义出来，但是不实现</span>
    
    <span class="token keyword">class</span> <span class="token class-name">Coder</span> <span class="token keyword">extends</span> <span class="token class-name">People</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我会打代码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">class</span> <span class="token class-name">JavaCoder</span> <span class="token keyword">extends</span> <span class="token class-name">People</span><span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;艾欧尼亚最强王者已上号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">coding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;摆烂了，啊对对对&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>里氏替换也是实现开闭原则的重要方式之一。</p><h2 id="依赖倒转原则" tabindex="-1"><a class="header-anchor" href="#依赖倒转原则" aria-hidden="true">#</a> 依赖倒转原则</h2><p>依赖倒转原则（Dependence Inversion Principle）也是我们一直在使用的，最明显的就是我们的Spring框架了。</p><blockquote><p>高层模块不应依赖于底层模块，它们都应该依赖抽象。抽象不应依赖于细节，细节应该依赖于抽象。</p></blockquote><p>还记得我们在我们之前的学习中为什么要一直使用接口来进行功能定义，然后再去实现吗？我们回顾一下在使用Spring框架之前的情况：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserController</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token comment">//该怎么用就这么用</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
        <span class="token comment">//CRUD...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserMapper</span> mapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//业务代码....</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//业务代码....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是突然有一天，公司业务需求变化，现在用户相关的业务操作需要使用新的实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserController</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
        <span class="token comment">//CRUD...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceNew</span> <span class="token punctuation">{</span>   <span class="token comment">//由于UserServiceNew发生变化，会直接影响到其他高层模块</span>
        <span class="token class-name">UserMapper</span> mapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//业务代码....</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>   <span class="token comment">//焯，干嘛改底层啊，我这又得重写了</span>
        <span class="token class-name">UserService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//哦豁，原来的不能用了</span>
        <span class="token class-name">UserServiceNew</span> serviceNew <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//只能修改成新的了</span>
        <span class="token comment">//业务代码....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现，我们的各个模块之间实际上是具有强关联的，一个模块是直接指定依赖于另一个模块，虽然这样结构清晰，但是底层模块的变动，会直接影响到其他依赖于它的高层模块，如果我们的项目变得很庞大，那么这样的修改将是一场灾难。</p><p>而有了Spring框架之后，我们的开发模式就发生了变化：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserController</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
        <span class="token comment">//接口中只做CRUD方法定义</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserMapperImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
        <span class="token comment">//实现类完成CRUD具体实现</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
        <span class="token comment">//业务代码定义....</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Resource</span>   <span class="token comment">//现在由Spring来为我们选择一个指定的实现类，然后注入，而不是由我们在类中硬编码进行指定</span>
        <span class="token class-name">UserMapper</span> mapper<span class="token punctuation">;</span>
        
        <span class="token comment">//业务代码具体实现</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Resource</span>
        <span class="token class-name">UserService</span> service<span class="token punctuation">;</span>   <span class="token comment">//直接使用接口，就算你改实现，我也不需要再修改代码了</span>

        <span class="token comment">//业务代码....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，通过使用接口，我们就可以将原有的强关联给弱化，我们只需要知道接口中定义了什么方法然后去使用即可，而具体的操作由接口的实现类来完成，并由Spring来为我们注入，而不是我们通过硬编码的方式去指定。</p><h2 id="接口隔离原则" tabindex="-1"><a class="header-anchor" href="#接口隔离原则" aria-hidden="true">#</a> 接口隔离原则</h2><p>接口隔离原则（Interface Segregation Principle, ISP）实际上是对接口的细化。</p><blockquote><p>客户端不应依赖那些它不需要的接口。</p></blockquote><p>我们在定义接口的时候，一定要注意控制接口的粒度，比如下面的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Device</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">getCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">getMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//电脑就是一种电子设备，那么我们就实现此接口</span>
<span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token keyword">implements</span> <span class="token class-name">Device</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;i9-12900K&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;电脑&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;32G DDR5&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//电风扇也算是一种电子设备</span>
<span class="token keyword">class</span> <span class="token class-name">Fan</span> <span class="token keyword">implements</span> <span class="token class-name">Device</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>   <span class="token comment">//就一个破风扇，还需要CPU？</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;风扇&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>   <span class="token comment">//风扇也不需要内存吧</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然我们定义了一个Device接口，但是由于此接口的粒度不够细，虽然比较契合电脑这种设备，但是不适合风扇这种设备，因为风扇压根就不需要CPU和内存，所以风扇完全不需要这些方法。这时我们就必须要对其进行更细粒度的划分：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">SmartDevice</span> <span class="token punctuation">{</span>   <span class="token comment">//智能设备才有getCpu和getMemory</span>
    <span class="token class-name">String</span> <span class="token function">getCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">getMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NormalDevice</span> <span class="token punctuation">{</span>   <span class="token comment">//普通设备只有getType</span>
    <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//电脑就是一种电子设备，那么我们就继承此接口</span>
<span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token keyword">implements</span> <span class="token class-name">SmartDevice</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;i9-12900K&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;电脑&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;32G DDR5&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//电风扇也算是一种电子设备</span>
<span class="token keyword">class</span> <span class="token class-name">Fan</span> <span class="token keyword">implements</span> <span class="token class-name">NormalDevice</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;风扇&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们就将接口进行了细粒度的划分，不同类型的电子设备就可以根据划分去实现不同的接口了。当然，也不能划分得太小，还是要根据实际情况来进行决定。</p><h2 id="合成复用原则" tabindex="-1"><a class="header-anchor" href="#合成复用原则" aria-hidden="true">#</a> 合成复用原则</h2><p>合成复用原则（Composite Reuse Principle）的核心就是委派。</p><blockquote><p>优先使用对象组合，而不是通过继承来达到复用的目的。</p></blockquote><p>在一个新的对象里面使用一些已有的对象，使之成为新对象的一部分，新的对象通过向这些对象的委派达到复用已有功能的目的。实际上我们在考虑将某个类通过继承关系在子类得到父类已经实现的方法之外（比如A类实现了连接数据库的功能，恰巧B类中也需要，我们就可以通过继承来获得A已经写好的连接数据库的功能，这样就能直接复用A中已经写好的逻辑）我们应该应该优先地去考虑使用合成的方式来实现复用。</p><p>比如下面这个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">connectDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是连接数据库操作！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span>    <span class="token comment">//直接通过继承的方式，得到A的数据库连接逻辑</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是B的方法，我也需要连接数据库！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">connectDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//直接调用父类方法就行</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然这样看起来没啥毛病，但是还是存在我们之前说的那个问题，耦合度太高了。</p><p>可以看到通过继承的方式实现复用，我们是将类B直接指定继承自类A的，那么如果有一天，由于业务的更改，我们的数据库连接操作，不再由A来负责，而是由新来的C去负责，那么这个时候，我们就不得不将需要复用A中方法的子类全部进行修改，很显然这样是费时费力的。</p><p>并且还有一个问题就是，通过继承子类会得到一些父类中的实现细节，比如某些字段或是方法，这样直接暴露给子类，并不安全。</p><p>所以，当我们需要实现复用时，可以优先考虑以下操作：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">connectDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是连接数据库操作！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>   <span class="token comment">//不进行继承，而是在用的时候给我一个A，当然也可以抽象成一个接口，更加灵活</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">A</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是B的方法，我也需要连接数据库！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">connectDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//在通过传入的对象A去执行</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或是：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">connectDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是连接数据库操作！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    
    <span class="token class-name">A</span> a<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token class-name">A</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//在构造时就指定好</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是B的方法，我也需要连接数据库！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">connectDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//也是通过对象A去执行</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过对象之间的组合，我们就大大降低了类之间的耦合度，并且A的实现细节我们也不会直接得到了。</p><h2 id="迪米特法则" tabindex="-1"><a class="header-anchor" href="#迪米特法则" aria-hidden="true">#</a> 迪米特法则</h2><p>迪米特法则（Law of Demeter）又称最少知识原则，是对程序内部数据交互的限制。</p><blockquote><p>每一个软件单位对其他单位都只有最少的知识，而且局限于那些与本单位密切相关的软件单位。</p></blockquote><p>简单来说就是，一个类/模块对其他的类/模块有越少的交互越好。当一个类发生改动，那么，与其相关的类（比如用到此类啥方法的类）需要尽可能少的受影响（比如修改了方法名、字段名等，可能其他用到这些方法或是字段的类也需要跟着修改）这样我们在维护项目的时候会更加轻松一些。</p><p>其实说白了，还是降低耦合度，我们还是来看一个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//假设我们当前的程序需要进行网络通信</span>
        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        test<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//现在需要执行test方法来做一些事情</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 比如test方法需要得到我们当前Socket连接的本地地址
         */</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">Socket</span> socket<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;IP地址：&quot;</span><span class="token operator">+</span>socket<span class="token punctuation">.</span><span class="token function">getLocalAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，虽然上面这种写法没有问题，我们提供直接提供一个Socket对象，然后再由test方法来取出IP地址，但是这样显然违背了迪米特法则，实际上这里的<code>test</code>方法只需要一个IP地址即可，我们完全可以直接传入一个字符串，而不是整个Socket对象，我们需要保证与其他类的交互尽可能的少。</p><p>就像我们在餐厅吃完了饭，应该是我们自己扫码付款，而不是直接把手机交给老板来帮你操作付款。</p><p>要是某一天，Socket类中的这些方法发生修改了，那我们就得连带着去修改这些类，很麻烦。</p><p>所以，我们来改进改进：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        test<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>socket<span class="token punctuation">.</span><span class="token function">getLocalAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHostAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//在外面解析好就行了</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//一个字符串就能搞定，就没必要丢整个对象进来</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;IP地址：&quot;</span><span class="token operator">+</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，类与类之间的耦合度再次降低。</p>`,80),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","Javashejimoshi（yi）.html.vue"]]);export{k as default};
