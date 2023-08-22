import{_ as p,r as n,o as c,c as i,a as s,b as a,d as e,e as l}from"./app-95e21c4a.js";const u={},r={href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-creating-buckets.html",target:"_blank",rel:"noopener noreferrer"},d=l(`<p>Amazon S3 버킷은 파일을 보관하는 저장소 위치입니다.<br> S3 파일들은 객체를 참조하고 있습니다.</p><p>이번 절에서는 S3 버킷관련 일반적인 동작을 어떻게 수행하는지 파이썬용 AWS SDK 사용하는 방법을 알아보겠습니다.</p><h2 id="amazon-s3-버킷-만들기" tabindex="-1"><a class="header-anchor" href="#amazon-s3-버킷-만들기" aria-hidden="true">#</a> Amazon S3 버킷 만들기</h2><p>Amazon S3 버킷의 이름은 AWS 플랫폼의 모든 지역에서 유일해야합니다.<br> 버킷은 지연을 최소화 하거나 규제요구사항을 해결하기 위해 특정 지역에 위치할 수 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> logging
<span class="token keyword">import</span> boto3
<span class="token keyword">from</span> botocore<span class="token punctuation">.</span>exceptions <span class="token keyword">import</span> ClientError


<span class="token keyword">def</span> <span class="token function">create_bucket</span><span class="token punctuation">(</span>bucket_name<span class="token punctuation">,</span> region<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 특정 지역에 S3 버킷을 생성하기
    리전이 지정되어있지 않으면, 버킷은 S3 기본 리전(us-east-1)에 생성됩니다.
    
    :param bucket_name: 생성할 버킷 이름
    :param region: 생성될 버킷의 지역 문자열, 예: us-west-2
    :return: 버킷이 생성되면 True, 아니면 False
    &quot;&quot;&quot;</span>
    
    <span class="token comment"># 버킷생성하기</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> region <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            s3_client <span class="token operator">=</span> boto3<span class="token punctuation">.</span>client<span class="token punctuation">(</span><span class="token string">&#39;s3&#39;</span><span class="token punctuation">)</span>
            s3_client<span class="token punctuation">.</span>create_bucket<span class="token punctuation">(</span>Bucket<span class="token operator">=</span>bucket_name<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            s3_client <span class="token operator">=</span> boto3<span class="token punctuation">.</span>client<span class="token punctuation">(</span><span class="token string">&#39;s3&#39;</span><span class="token punctuation">,</span> region_name<span class="token operator">=</span>region<span class="token punctuation">)</span>
            location <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;LocationConstraint&#39;</span><span class="token punctuation">:</span> region<span class="token punctuation">}</span>
            s3_client<span class="token punctuation">.</span>create_bucket<span class="token punctuation">(</span>Bucket<span class="token operator">=</span>bucket_name<span class="token punctuation">,</span> CreaetBucketConfiguration<span class="token operator">=</span>location<span class="token punctuation">)</span>
    <span class="token keyword">except</span> ClientError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        logging<span class="token punctuation">.</span>error<span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="기존-버킷-목록조회" tabindex="-1"><a class="header-anchor" href="#기존-버킷-목록조회" aria-hidden="true">#</a> 기존 버킷 목록조회</h2><p>AWS 계정에 있는 기존 버킷 목록을 조회하는 것 입니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 기존 버킷목록 가져오기</span>
s3 <span class="token operator">=</span> boto3<span class="token punctuation">.</span>client<span class="token punctuation">(</span><span class="token string">&#39;s3&#39;</span><span class="token punctuation">)</span>
resposne <span class="token operator">=</span> s3<span class="token punctuation">.</span>list_buckets<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 버킷이름 출력하기</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Existing buckets:&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> bucket <span class="token keyword">in</span> response<span class="token punctuation">[</span><span class="token string">&#39;Buckets&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;    </span><span class="token interpolation"><span class="token punctuation">{</span>bucket<span class="token punctuation">[</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function k(m,v){const t=n("ExternalLinkIcon"),o=n("AdsenseB");return c(),i("div",null,[s("p",null,[a("원문 : "),s("a",r,[a("https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-creating-buckets.html"),e(t)])]),d,e(o)])}const g=p(u,[["render",k],["__file","amazon-s3.html.vue"]]);export{g as default};
