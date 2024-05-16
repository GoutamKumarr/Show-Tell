self.__BUILD_MANIFEST = function(s, c, t, a, e, i, n, u, d, f, g, h, b, l, r, k, o) {
    return {
        __rewrites: {
            afterFiles: [{
                has: l,
                source: "/:nextInternalLocale(en|fr|de)",
                destination: "/:nextInternalLocale/homepage"
            }, {
                has: l,
                source: "/:nextInternalLocale(en|fr|de)/st-login/:path*",
                destination: "/:nextInternalLocale/st-login"
            }],
            beforeFiles: [],
            fallback: []
        },
        "/404": [s, c, t, "static/css/2f2ebdfc7612e193.css", "static/chunks/pages/404-82506f53b5a08d0d.js"],
        "/_error": ["static/chunks/pages/_error-3204f16f4dfccbfb.js"],
        "/campaign/[slug]": ["static/chunks/4072747d-a108088ef9c4402f.js", a, e, s, i, n, "static/chunks/9453-e0f29c59efc09d6f.js", "static/chunks/7921-aeb8a83d3c3710bd.js", c, t, "static/css/c66a19f88affa66d.css", "static/chunks/pages/campaign/[slug]-504d8d6797feb0cf.js"],
        "/case-study": [s, c, t, "static/css/baa64e84f0ab6e02.css", "static/chunks/pages/case-study-702902d40924ac02.js"],
        "/case-study/[slug]": [u, d, f, a, e, g, h, s, i, n, r, "static/chunks/2004-870caa8748c8cc49.js", b, c, t, "static/css/235b4caa9e18a9b8.css", "static/chunks/pages/case-study/[slug]-d9470c7186df487a.js"],
        "/contact-us": [s, c, t, "static/css/c7df7c591d83550d.css", "static/chunks/pages/contact-us-53432bb8e7e53a5b.js"],
        "/insights": [s, c, t, k, o, "static/chunks/pages/insights-19890b1bf32f4b32.js"],
        "/insights/[category]": [s, c, t, k, o, "static/chunks/pages/insights/[category]-110abb9ebc4ec18a.js"],
        "/insights/[category]/[slug]": [u, d, f, a, e, g, h, s, b, c, t, "static/css/e40daace9cd3784e.css", "static/chunks/pages/insights/[category]/[slug]-33929d2db4141e8c.js"],
        "/sector/[slug]": [u, d, f, a, e, g, h, s, i, n, r, b, c, t, "static/css/f124961414680b60.css", "static/chunks/pages/sector/[slug]-a995185328de4397.js"],
        "/style-guide": ["static/css/d64fe8d050d86c3b.css", "static/chunks/pages/style-guide-68edd3f21f63845b.js"],
        "/[slug]": [s, c, t, "static/chunks/pages/[slug]-221105caae5339cc.js"],
        sortedPages: ["/404", "/_app", "/_error", "/campaign/[slug]", "/case-study", "/case-study/[slug]", "/contact-us", "/insights", "/insights/[category]", "/insights/[category]/[slug]", "/sector/[slug]", "/style-guide", "/[slug]"]
    }
}("static/chunks/5950-add6757f6182291c.js", "static/css/cb1dbcef81c464de.css", "static/chunks/9548-9fa1671aa2fb96d4.js", "static/chunks/8764-eea8f6b555b2048d.js", "static/chunks/9539-2e9ccb1a4ee3095f.js", "static/chunks/2261-6d8581534f85fbb5.js", "static/chunks/8918-f60950b9f8baa6e6.js", "static/chunks/fec483df-ede4164406302095.js", "static/chunks/d3048c20-85006cc37e2a1e08.js", "static/chunks/d2094a0f-786ce57baa535fca.js", "static/css/4d18542cd40c3644.css", "static/chunks/2797-6d16205d79ca123e.js", "static/chunks/5555-51df53a0e70679ca.js", void 0, "static/chunks/1665-39ee2ba033ca17cf.js", "static/chunks/6998-ad895c956d1e9960.js", "static/css/a5dd9d45079329e2.css"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();