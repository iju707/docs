import{_ as c,r as n,o,c as i,a as s,b as a,d as e,e as l}from"./app-95e21c4a.js";const u={},r={href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-bucket-policies.html",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="버킷-정책" tabindex="-1"><a class="header-anchor" href="#버킷-정책" aria-hidden="true">#</a> 버킷 정책</h2><p>S3 버킷은 다른 AWS 계정, AWS 식별자와 접근 관리(IAM) 사용자에 대한 접근권한을 부여할 수 있는 선택적 옵션을 가지고 있습니다.<br> 버킷 정책은 자원기반 IAM 정책과 동일한 JSON 형식을 사용하여 정의할 수 있습니다.</p><h3 id="버킷-정책-검색하기" tabindex="-1"><a class="header-anchor" href="#버킷-정책-검색하기" aria-hidden="true">#</a> 버킷 정책 검색하기</h3><p>파이썬용 AWS SDK의 <code>get_bucket_policy</code> 함수를 호출하여 버킷 정책을 검색할 수 있습니다.<br> 함수는 특정 버킷이름을 인자로 받습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> boto3

<span class="token comment"># 특정 버킷의 정책을 검색하기</span>
s3 <span class="token operator">=</span> boto3<span class="token punctuation">.</span>client<span class="token punctuation">(</span><span class="token string">&#39;s3&#39;</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> s3<span class="token punctuation">.</span>get_bucket_policy<span class="token punctuation">(</span>Bucket<span class="token operator">=</span><span class="token string">&#39;BUCKET_NAME&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token string">&#39;Policy&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="버킷-정책-설정하기" tabindex="-1"><a class="header-anchor" href="#버킷-정책-설정하기" aria-hidden="true">#</a> 버킷 정책 설정하기</h3><p>버킷 정책은 <code>put_bucket_policy</code> 함수를 호출하여 설정할 수 있습니다.</p><p>정책은 IAM 정책과 동일한 JSON 형식으로 정의됩니다.<br> 아래 예제에서 정의된 정책은 사용자가 <code>bucket_name</code> 변수로 식별된 버킷에 저장되어있는 객체를 검색할 수 있도록 활성화 하는 것 입니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">import</span> boto3

<span class="token comment"># 버킷 정책 생성하기</span>
bucket_name <span class="token operator">=</span> <span class="token string">&#39;BUCKET_NAME&#39;</span>
bucket_policy <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;Version&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2022-01-01&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Statement&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token string">&#39;Sid&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;AddPerm&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Effect&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Allow&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Principal&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Action&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;s3:GetObject&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Resource&#39;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&#39;arn:aws:s3:::</span><span class="token interpolation"><span class="token punctuation">{</span>bucket_name<span class="token punctuation">}</span></span><span class="token string">/*&#39;</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 정책을 JSON 딕셔너리에서 문자열로 전환하기</span>
bucket_policy <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>bucket_policy<span class="token punctuation">)</span>

<span class="token comment"># 새로운 정책 설정하기</span>
s3 <span class="token operator">=</span> boto3<span class="token punctuation">.</span>client<span class="token punctuation">(</span><span class="token string">&#39;s3&#39;</span><span class="token punctuation">)</span>
s3<span class="token punctuation">.</span>put_bucket_policy<span class="token punctuation">(</span>Bucket_name<span class="token operator">=</span>bucket_name<span class="token punctuation">,</span> Policy<span class="token operator">=</span>bucket_policy<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="버킷-정책-삭제하기" tabindex="-1"><a class="header-anchor" href="#버킷-정책-삭제하기" aria-hidden="true">#</a> 버킷 정책 삭제하기</h3><p>버킷 정책은 <code>delete_bucket_policy</code> 함수를 후출하여 삭제할 수 있습니다.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 버킷 정책 삭제하기</span>
s3 <span class="token operator">=</span> boto3<span class="token punctuation">.</span>client<span class="token punctuation">(</span><span class="token string">&#39;s3&#39;</span><span class="token punctuation">)</span>
s3<span class="token punctuation">.</span>delete_bucket_policy<span class="token punctuation">(</span>Bucket<span class="token operator">=</span><span class="token string">&#39;BUCKET_NAME&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function k(m,v){const t=n("ExternalLinkIcon"),p=n("AdsenseB");return o(),i("div",null,[s("p",null,[a("원문 : "),s("a",r,[a("https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-bucket-policies.html"),e(t)])]),d,e(p)])}const _=c(u,[["render",k],["__file","bucket-policies.html.vue"]]);export{_ as default};