<script lang="ts">
	import { fly } from 'svelte/transition';

	export let height = '192';
	export let width = 'auto';
	export let href: string;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	version="1.1"
	viewBox="0 0 2048 416"
	class="diagram select-none font-mono"
	text-anchor="middle"
	font-size="13px"
	stroke-linecap="round"
	fill="currentColor"
	{height}
	{width}
	in:fly={{ x: -100, duration: 300, delay: 320 }}
	out:fly={{ x: 100, duration: 300 }}
>
	<a {href}>
		<circle cx="936" cy="192" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="936" cy="208" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="944" cy="128" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="944" cy="272" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="952" cy="128" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="952" cy="272" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="960" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="960" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="968" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="968" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="976" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="976" cy="176" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="976" cy="192" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="976" cy="208" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="976" cy="224" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="976" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="984" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="984" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="992" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="992" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1000" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1000" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1008" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1008" cy="160" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1008" cy="240" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1008" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1016" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1016" cy="160" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1016" cy="240" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1016" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1024" cy="176" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1024" cy="192" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1024" cy="208" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1024" cy="224" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1032" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1032" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1040" cy="112" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1040" cy="288" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1048" cy="128" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1048" cy="272" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1056" cy="128" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1056" cy="272" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1064" cy="176" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1064" cy="192" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1064" cy="208" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1064" cy="224" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1064" cy="240" r="6" class="opendot" fill="none" stroke="currentColor" />
		<circle cx="1064" cy="256" r="6" class="opendot" fill="none" stroke="currentColor" />
		<g class="text">
			<text x="80" y="20">$$$$$</text>
			<text x="80" y="36">$:::$</text>
			<text x="1516" y="36">dddddddd</text>
			<text x="84" y="52">$$$$$:::$$$$$$</text>
			<text x="316" y="52">tttt</text>
			<text x="440" y="52">hhhhhhh</text>
			<text x="1516" y="52">d::::::d</text>
			<text x="80" y="68">$$::::::::::::::$</text>
			<text x="304" y="68">ttt:::t</text>
			<text x="440" y="68">h:::::h</text>
			<text x="1516" y="68">d::::::d</text>
			<text x="76" y="84">$:::::$$$$$$$::::$</text>
			<text x="304" y="84">t:::::t</text>
			<text x="440" y="84">h:::::h</text>
			<text x="1516" y="84">d::::::d</text>
			<text x="28" y="100">$::::$</text>
			<text x="128" y="100">$$$$$</text>
			<text x="304" y="100">t:::::t</text>
			<text x="440" y="100">h:::::h</text>
			<text x="1512" y="100">d:::::d</text>
			<text x="28" y="116">$::::$</text>
			<text x="304" y="116">ttttttt:::::ttttttt</text>
			<text x="468" y="116">h::::h hhhhh</text>
			<text x="652" y="116">eeeeeeeeeeee</text>
			<text x="868" y="116">cccccccccccccccc</text>
			<text x="1024" y="116">o</text>
			<text x="1088" y="116">rrrrr</text>
			<text x="1168" y="116">rrrrrrrrr</text>
			<text x="1308" y="116">eeeeeeeeeeee</text>
			<text x="1508" y="116">ddddddddd:::::d uuuuuu</text>
			<text x="1652" y="116">uuuuuu</text>
			<text x="1744" y="116">mmmmmmm</text>
			<text x="1832" y="116">mmmmmmm</text>
			<text x="1904" y="116">ppppp</text>
			<text x="1984" y="116">ppppppppp</text>
			<text x="28" y="132">$::::$</text>
			<text x="304" y="132">t:::::::::::::::::t</text>
			<text x="480" y="132">h::::hh:::::hhh</text>
			<text x="652" y="132">ee::::::::::::ee</text>
			<text x="860" y="132">cc:::::::::::::::c</text>
			<text x="1000" y="132">:::::::::::</text>
			<text x="1140" y="132">r::::rrr:::::::::r</text>
			<text x="1308" y="132">ee::::::::::::ee</text>
			<text x="1500" y="132">dd::::::::::::::d u::::u</text>
			<text x="1652" y="132">u::::u</text>
			<text x="1740" y="132">mm:::::::m</text>
			<text x="1912" y="132">m:::::::mm p::::ppp:::::::::p</text>
			<text x="64" y="148">$:::::$$$$$$$$$</text>
			<text x="304" y="148">t:::::::::::::::::t</text>
			<text x="488" y="148">h::::::::::::::hh</text>
			<text x="656" y="148">e::::::eeeee:::::ee</text>
			<text x="1000" y="148">c:::::::::::::::::co:::::::::::::::or:::::::::::::::::r</text>
			<text x="1416" y="148">e::::::eeeee:::::ee d::::::::::::::::d u::::u</text>
			<text x="1652" y="148">u::::u</text>
			<text x="1864" y="148">m::::::::::mm::::::::::mp:::::::::::::::::p</text>
			<text x="76" y="164">$$::::::::::::$$</text>
			<text x="304" y="164">tttttt:::::::tttttt</text>
			<text x="528" y="164">h:::::::hhh::::::h e::::::e</text>
			<text x="704" y="164">e:::::e</text>
			<text x="888" y="164">c:::::::cccccc:::::co:::::ooo</text>
			<text x="1156" y="164">:::::orr::::::rrrrr::::::re::::::e</text>
			<text x="1464" y="164">e:::::ed:::::::ddddd:::::d u::::u</text>
			<text x="1652" y="164">u::::u</text>
			<text x="1868" y="164">m::::::::::::::::::::::mpp::::::ppppp::::::p</text>
			<text x="88" y="180">$$$$$$$$$:::::$</text>
			<text x="304" y="180">t:::::t</text>
			<text x="452" y="180">h::::::h</text>
			<text x="620" y="180">h::::::he:::::::eeeee::::::e</text>
			<text x="804" y="180">c::::::c</text>
			<text x="924" y="180">ccccccco::::</text>
			<text x="1044" y="180">::::</text>
			<text x="1104" y="180">r:::::r</text>
			<text x="1312" y="180">r:::::re:::::::eeeee::::::ed::::::d</text>
			<text x="1540" y="180">d:::::d u::::u</text>
			<text x="1652" y="180">u::::u</text>
			<text x="1820" y="180">m:::::mmm::::::mmm:::::m p:::::p</text>
			<text x="2016" y="180">p:::::p</text>
			<text x="124" y="196">$::::$</text>
			<text x="304" y="196">t:::::t</text>
			<text x="448" y="196">h:::::h</text>
			<text x="620" y="196">h:::::he:::::::::::::::::e</text>
			<text x="800" y="196">c:::::c</text>
			<text x="956" y="196">::::</text>
			<text x="1044" y="196">::::</text>
			<text x="1104" y="196">r:::::r</text>
			<text x="1308" y="196">rrrrrrre:::::::::::::::::e d:::::d</text>
			<text x="1540" y="196">d:::::d u::::u</text>
			<text x="1652" y="196">u::::u</text>
			<text x="1716" y="196">m::::m</text>
			<text x="1788" y="196">m::::m</text>
			<text x="1892" y="196">m::::m p:::::p</text>
			<text x="2016" y="196">p:::::p</text>
			<text x="124" y="212">$::::$</text>
			<text x="304" y="212">t:::::t</text>
			<text x="448" y="212">h:::::h</text>
			<text x="616" y="212">h:::::he::::::eeeeeeeeeee</text>
			<text x="800" y="212">c:::::c</text>
			<text x="956" y="212">::::</text>
			<text x="1044" y="212">::::</text>
			<text x="1104" y="212">r:::::r</text>
			<text x="1300" y="212">e::::::eeeeeeeeeee</text>
			<text x="1416" y="212">d:::::d</text>
			<text x="1540" y="212">d:::::d u::::u</text>
			<text x="1652" y="212">u::::u</text>
			<text x="1716" y="212">m::::m</text>
			<text x="1788" y="212">m::::m</text>
			<text x="1892" y="212">m::::m p:::::p</text>
			<text x="2016" y="212">p:::::p</text>
			<text x="24" y="228">$$$$$</text>
			<text x="124" y="228">$::::$</text>
			<text x="304" y="228">t:::::t</text>
			<text x="420" y="228">tttttt h:::::h</text>
			<text x="580" y="228">h:::::he:::::::e</text>
			<text x="804" y="228">c::::::c</text>
			<text x="924" y="228">ccccccco::::</text>
			<text x="1044" y="228">::::</text>
			<text x="1104" y="228">r:::::r</text>
			<text x="1264" y="228">e:::::::e</text>
			<text x="1416" y="228">d:::::d</text>
			<text x="1580" y="228">d:::::d u:::::uuuu:::::u</text>
			<text x="1716" y="228">m::::m</text>
			<text x="1788" y="228">m::::m</text>
			<text x="1892" y="228">m::::m p:::::p</text>
			<text x="2012" y="228">p::::::p</text>
			<text x="76" y="244">$::::$$$$$$$:::::$</text>
			<text x="376" y="244">t::::::tttt:::::t h:::::h</text>
			<text x="584" y="244">h:::::he::::::::e</text>
			<text x="888" y="244">c:::::::cccccc:::::co:::::ooo</text>
			<text x="1040" y="244">:::::</text>
			<text x="1104" y="244">r:::::r</text>
			<text x="1268" y="244">e::::::::e</text>
			<text x="1564" y="244">d::::::ddddd::::::ddu:::::::::::::::uum::::m</text>
			<text x="1788" y="244">m::::m</text>
			<text x="1940" y="244">m::::m p:::::ppppp:::::::p</text>
			<text x="72" y="260">$::::::::::::::$$</text>
			<text x="376" y="260">tt::::::::::::::t h:::::h</text>
			<text x="616" y="260">h:::::h e::::::::eeeeeeee</text>
			<text x="920" y="260">c:::::::::::::::::co:::::::::::::::</text>
			<text x="1104" y="260">r:::::r</text>
			<text x="1304" y="260">e::::::::eeeeeeee</text>
			<text x="1568" y="260">d:::::::::::::::::d u:::::::::::::::um::::m</text>
			<text x="1788" y="260">m::::m</text>
			<text x="1936" y="260">m::::m p::::::::::::::::p</text>
			<text x="68" y="276">$$$$$$:::$$$$$</text>
			<text x="384" y="276">tt:::::::::::tt h:::::h</text>
			<text x="544" y="276">h:::::h</text>
			<text x="652" y="276">ee:::::::::::::e</text>
			<text x="860" y="276">cc:::::::::::::::c</text>
			<text x="1000" y="276">:::::::::::</text>
			<text x="1104" y="276">r:::::r</text>
			<text x="1308" y="276">ee:::::::::::::e</text>
			<text x="1476" y="276">d:::::::::ddd::::d</text>
			<text x="1652" y="276">uu::::::::uu:::um::::m</text>
			<text x="1788" y="276">m::::m</text>
			<text x="1932" y="276">m::::m p::::::::::::::pp</text>
			<text x="72" y="292">$:::$</text>
			<text x="352" y="292">ttttttttttt</text>
			<text x="448" y="292">hhhhhhh</text>
			<text x="544" y="292">hhhhhhh</text>
			<text x="660" y="292">eeeeeeeeeeeeee</text>
			<text x="868" y="292">cccccccccccccccc</text>
			<text x="1024" y="292">o</text>
			<text x="1104" y="292">rrrrrrr</text>
			<text x="1316" y="292">eeeeeeeeeeeeee</text>
			<text x="1448" y="292">ddddddddd</text>
			<text x="1528" y="292">ddddd</text>
			<text x="1612" y="292">uuuuuuuu</text>
			<text x="1700" y="292">uuuummmmmm</text>
			<text x="1788" y="292">mmmmmm</text>
			<text x="1924" y="292">mmmmmm p::::::pppppppp</text>
			<text x="72" y="308">$$$$$</text>
			<text x="1920" y="308">p:::::p</text>
			<text x="1920" y="324">p:::::p</text>
			<text x="1920" y="340">p:::::::p</text>
			<text x="1920" y="356">p:::::::p</text>
			<text x="1920" y="372">p:::::::p</text>
			<text x="1920" y="388">ppppppppp</text>
		</g>
	</a>
</svg>
