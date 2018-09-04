<template>

	<div class="feature_D">
		<wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background">
		</wwObject>

		<div class="content">
			<div class="title-container">
				<svg class="blob" preserveAspectRatio="none" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" viewBox="0 0 1284 252">
					<metadata id="metadata62">
						<rdf:RDF>
							<cc:Work rdf:about="">
								<dc:format>image/svg+xml</dc:format>
								<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
								<dc:title>Rectangle 7</dc:title>
							</cc:Work>
						</rdf:RDF>
					</metadata>
					<defs id="defs49">
						<path d="m 0,0 h 1215 c 39.3333,74.006803 39.3333,131.0068 0,171 -59,59.9898 -395.19294,50 -587.08333,50 C 499.98974,221 290.68418,208 0,182 Z" id="path-1" inkscape:connector-curvature="0" />
						<filter x="-0.051999997" y="-0.33200002" width="1.104" height="1.582" filterUnits="objectBoundingBox" id="filter-2">
							<feOffset dx="0" dy="-9" in="SourceAlpha" result="shadowOffsetOuter1" id="feOffset42" />
							<feGaussianBlur stdDeviation="20" in="shadowOffsetOuter1" result="shadowBlurOuter1" id="feGaussianBlur44" />
							<feColorMatrix values="0 0 0 0 0.443137255   0 0 0 0 0.48627451   0 0 0 0 0.537254902  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" id="feColorMatrix46" />
						</filter>
					</defs>
					<g id="01---Webeo---Desktop" transform="translate(0,-995)" style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1">
						<g id="Group" transform="translate(0,995)">
							<g id="Rectangle-7">
								<use xlink:href="#path-1" id="use51" style="fill:#000000;fill-opacity:1;filter:url(#filter-2)" x="0" y="0" width="100%" height="100%" />
								<use xlink:href="#path-1" id="use53" style="fill:#ffffff;fill-rule:evenodd" x="0" y="0" width="100%" height="100%" />
							</g>
						</g>
					</g>
				</svg>
				<div class="title" v-ww-vertical-align>
					<wwObject v-bind:ww-object="section.data.title" ww-default-object-type="ww-text"></wwObject>
				</div>
			</div>
			<div class="card-container container">
				<div class="card-column">
					<div class="card-outter card-1">
						<div class="card-string"></div>
						<div class="card" v-on:click="wwOnClickCard" data-card="1" ng-class="{'flipped':cardStatus[0].flipped}">
							<div class="card-content front">

								<wwObject class="background" v-bind:ww-object="section.data.card1Bg" ww-category="background">
								</wwObject>

								<div class="ww-object-container" v-for="wwObject in section.data.cardsWwObject[0]" :key="wwObject.uniqueId">
									<wwObject v-bind:ww-object="wwObject" ww-default-object-type="ww-text"></wwObject>
								</div>

								<div class="handle-container">
									<div class="handle" v-bind:style="section.data.handleGradient">
										<div class="handle-pulse handle-pulse-1"></div>
										<div class="handle-pulse handle-pulse-2"></div>
										<div class="handle-pulse handle-pulse-3"></div>
									</div>
								</div>

							</div>

							<div class="card-content back">
								<wwObject class="background" v-bind:ww-object="section.data.card4Bg" ww-category="background">
								</wwObject>

								<div class="ww-object-container" v-for="wwObject in section.data.cardsWwObject[3]" :key="wwObject.uniqueId">
									<wwObject v-bind:ww-object="wwObject" ww-default-object-type="ww-text"></wwObject>
								</div>

							</div>
						</div>

					</div>
				</div>

				<div class="card-column">
					<div class="card-outter card-2">
						<div class="card-string"></div>
						<div class="card" v-on:click="wwOnClickCard" data-card="2" ng-class="{'flipped':cardStatus[1].flipped}">
							<div class="card-content front">
								<wwObject class="background" v-bind:ww-object="section.data.card2Bg" ww-category="background">
								</wwObject>

								<div class="ww-object-container" v-for="wwObject in section.data.cardsWwObject[1]" :key="wwObject.uniqueId">
									<wwObject v-bind:ww-object="wwObject" ww-default-object-type="ww-text"></wwObject>
								</div>

								<div class="handle-container">
									<div class="handle" v-bind:style="section.data.handleGradient">
										<div class="handle-pulse handle-pulse-1"></div>
										<div class="handle-pulse handle-pulse-2"></div>
										<div class="handle-pulse handle-pulse-3"></div>
									</div>
								</div>

							</div>
							<div class="card-content back">
								<wwObject class="background" v-bind:ww-object="section.data.card5Bg" ww-category="background">
								</wwObject>

								<div class="ww-object-container" v-for="wwObject in section.data.cardsWwObject[4]" :key="wwObject.uniqueId">
									<wwObject v-bind:ww-object="wwObject" ww-default-object-type="ww-text"></wwObject>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div class="card-column">
					<div class="card-outter card-3">
						<div class="card-string"></div>
						<div class="card" v-on:click="wwOnClickCard" data-card="3" ng-class="{'flipped':cardStatus[2].flipped}">
							<div class="card-content front">
								<wwObject class="background" v-bind:ww-object="section.data.card3Bg" ww-category="background">
								</wwObject>

								<div class="ww-object-container" v-for="wwObject in section.data.cardsWwObject[2]" :key="wwObject.uniqueId">
									<wwObject v-bind:ww-object="wwObject" ww-default-object-type="ww-text"></wwObject>
								</div>

								<div class="handle-container">
									<div class="handle" v-bind:style="section.data.handleGradient">
										<div class="handle-pulse handle-pulse-1"></div>
										<div class="handle-pulse handle-pulse-2"></div>
										<div class="handle-pulse handle-pulse-3"></div>
									</div>
								</div>

							</div>
							<div class="card-content back">
								<wwObject class="background" v-bind:ww-object="section.data.card6Bg" ww-category="background">
								</wwObject>

								<div class="ww-object-container" v-for="wwObject in section.data.cardsWwObject[5]" :key="wwObject.uniqueId">
									<wwObject v-bind:ww-object="wwObject" ww-default-object-type="ww-text"></wwObject>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div class="clearfix"></div>

			</div>
		</div>

	</div>

	<!--
	<div class="hello">
		<h1>Bonjour Section Feature_D ! :D :)</h1>
		<p>
			For guide and recipes on how to configure / customize this project,<br> check out the
			<a href="https://github.com/vuejs/vue-cli/tree/dev/docs" target="_blank">vue-cli documentation</a>.
		</p>
		<h3>Installed CLI Plugins coucou</h3>
		<ul>
			<li>
				<a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank">eslint</a>
			</li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li>
				<a href="https://vuejs.org" target="_blank">Core Docs</a>
			</li>
			<li>
				<a href="https://forum.vuejs.org" target="_blank">Forum</a>
			</li>
			<li>
				<a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
			</li>
			<li>
				<a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
			</li>
		</ul>
		<h3 @click="lala">Ecosystem</h3>
		<ul>
			<li>
				<a href="https://router.vuejs.org/en/essentials/getting-started.html" target="_blank">vue-router</a>
			</li>
			<li>
				<a href="https://vuex.vuejs.org/en/intro.html" target="_blank">vuex</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a>
			</li>
			<li>
				<a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
			</li>
		</ul>
		<wwObject v-bind:ww-object="section.data.title"></wwObject>
		<wwObject v-bind:ww-object="section.data.card4Bg" ww-category="background" style="height: 300px"></wwObject>

		<wwObject v-for="wwObject in section.data.cardsWwObject[0]" :key="wwObject.uniqueId" v-bind:ww-object="wwObject"></wwObject>
	</div>
	-->
</template>

<script>
export default {
	name: "feature_D",
	props: {
		section: Object
	},
	methods: {
		wwOnScroll: function () {
			if (this.wwAnimStarted) {
				return;
			}

			var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
			var sectionTop = this.$el.getBoundingClientRect().top;

			if (scrollTop >= sectionTop - window.innerHeight / 4) {
				this.wwRunAnim();
			}

		},
		wwRunAnim: function () {
			this.wwAnimStarted = true;

			const self = this;

			self.$el.querySelector('.card-1').classList.add('animate');

			setTimeout(function () {
				self.$el.querySelector('.card-2').classList.add('animate');

				setTimeout(function () {
					self.$el.querySelector('.card-3').classList.add('animate');
				}, 300);

			}, 300);

		},
		wwOnMousemove: function (event, factor) {
			factor = factor || 1;
			var offset = 0;

			var c = (event.target || event.srcElement).closest('.card');

			var index = 0;

			if (c.getAttribute("data-card") == "2") {
				index = 1;
			}
			if (c.getAttribute("data-card") == "3") {
				index = 2;
			}

			if (this.cardStatus[index].flipped) {
				offset = 180;
			}

			var parentOffset = c.parentElement.getBoundingClientRect();

			var x = (event.pageX - parentOffset.left) / c.getBoundingClientRect().width * 2 - 1;
			var y = (event.pageY - parentOffset.top) / c.getBoundingClientRect().height;

			var rX = -y * 2 * factor;
			var rY = x * 2 * factor + offset;

			//c.css("-webkit-transition", "");
			//c.css("-moz-transition", "");
			//c.css("-o-transition", "");
			c.style.transition = "";

			//c.css("-webkit-transform", "perspective(600px) rotateX(" + rX + "deg) rotateY(" + rY + "deg)");
			//c.css("-moz-transform", "perspective(600px) rotateX(" + rX + "deg) rotateY(" + rY + "deg)");
			//c.css("-o-transform", "perspective(600px) rotateX(" + rX + "deg) rotateY(" + rY + "deg)");
			c.style.transform = "perspective(600px) rotateX(" + rX + "deg) rotateY(" + rY + "deg)";

		},
		wwOnMouseout: function (event) {
			var offset = 0;

			var c = (event.target || event.srcElement).closest('.card');

			var index = 0;

			if (c.getAttribute("data-card") == "2") {
				index = 1;
			}
			if (c.getAttribute("data-card") == "3") {
				index = 2;
			}

			if (this.cardStatus[index].flipped) {
				offset = 180;
			}

			//c.css("-webkit-transition", "all 0.3s ease");
			//c.css("-moz-transition", "all 0.3s ease");
			//c.css("-o-transition", "all 0.3s ease");
			c.style.transition = "all 0.3s ease";

			//c.css("-webkit-transform", "perspective(600px) rotateX(0deg) rotateY( " + offset + "deg)");
			//c.css("-moz-transform", "perspective(600px) rotateX(0deg) rotateY( " + offset + "deg)");
			//c.css("-o-transform", "perspective(600px) rotateX(0deg) rotateY( " + offset + "deg)");
			c.style.transform = "perspective(600px) rotateX(0deg) rotateY( " + offset + "deg)";
		},
		wwOnClickCard: function (event) {

			var c = (event.target || event.srcElement).closest('.card');

			var index = 0;

			if (c.getAttribute("data-card") == "2") {
				index = 1;
			}
			if (c.getAttribute("data-card") == "3") {
				index = 2;
			}

			var parentOffset = c.parentElement.getBoundingClientRect();

			var x = (event.pageX - parentOffset.left) / c.getBoundingClientRect().width * 2 - 1;

			c.removeEventListener("mousemove", this.wwOnMousemove);
			c.removeEventListener("mouseout", this.wwOnMouseout);

			//c.css("-webkit-transition", "1s all ease");
			//c.css("-moz-transition", "1s all ease");
			//c.css("-o-transition", "1s all ease");
			c.style.transition = "1s all ease";

			var offset = 0;
			if (!this.cardStatus[index].flipped) {
				offset = 180;
			}

			if (x > 0) {
				//c.css("-webkit-transform", "perspective(600px) rotateY(" + (-offset) + "deg)");
				//c.css("-moz-transform", "perspective(600px) rotateY(" + (-offset) + "deg)");
				//c.css("-o-transform", "perspective(600px) rotateY(" + (-offset) + "deg)");
				c.style.transform = "perspective(600px) rotateY(" + (-offset) + "deg)";
			}
			else {
				//c.css("-webkit-transform", "perspective(600px) rotateY(" + offset + "deg)");
				//c.css("-moz-transform", "perspective(600px) rotateY(" + offset + "deg)");
				//c.css("-o-transform", "perspective(600px) rotateY(" + offset + "deg)");
				c.style.transform = "perspective(600px) rotateY(" + offset + "deg)";
			}

			this.cardStatus[index].flipped = !this.cardStatus[index].flipped;

			const self = this;

			setTimeout(function () {
				c.addEventListener("mousemove", self.wwOnMousemove);
				c.addEventListener("mouseout", self.wwOnMouseout);
			}, 1050)

		}
	},
	beforeDestroy: function () {
		window.removeEventListener('scroll', this.wwOnScroll);

		this.$el.querySelector(".card-1 .card").removeEventListener("mousemove", this.wwOnMousemove);
		this.$el.querySelector(".card-1 .card").removeEventListener("mouseout", this.wwOnMouseout);

		this.$el.querySelector(".card-2 .card").removeEventListener("mousemove", this.wwOnMousemove);
		this.$el.querySelector(".card-2 .card").removeEventListener("mouseout", this.wwOnMouseout);

		this.$el.querySelector(".card-3 .card").removeEventListener("mousemove", this.wwOnMousemove);
		this.$el.querySelector(".card-3 .card").removeEventListener("mouseout", this.wwOnMouseout);
	},
	created: function () {

		this.cardStatus = [{
			flipped: false
		}, {
			flipped: false
		}, {
			flipped: false
		},
		]

		this.wwAnimStarted = false;

		if (!this.section.data.cardsWwObject) {
			this.section.data.cardsWwObject = []
		}

		while (this.section.data.cardsWwObject.length < 6) {
			this.section.data.cardsWwObject.push([]);
		}

		//Add scroll event
		window.addEventListener('scroll', this.wwOnScroll);

		//Trigger scroll at least once
		setTimeout(this.wwOnScroll, 200);
	},
	mounted: function () {

		this.$el.querySelector(".card-1 .card").addEventListener("mousemove", this.wwOnMousemove);
		this.$el.querySelector(".card-1 .card").addEventListener("mouseout", this.wwOnMouseout);

		this.$el.querySelector(".card-2 .card").addEventListener("mousemove", this.wwOnMousemove);
		this.$el.querySelector(".card-2 .card").addEventListener("mouseout", this.wwOnMouseout);

		this.$el.querySelector(".card-3 .card").addEventListener("mousemove", this.wwOnMousemove);
		this.$el.querySelector(".card-3 .card").addEventListener("mouseout", this.wwOnMouseout);

	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feature_D {
  position: relative;
}

.feature_D .background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.feature_D .content {
  position: relative;
  width: 100%;
  padding-bottom: 100px;
}

.feature_D .title-container {
  /*width: 100%;*/
  height: 130px;
  padding: 0 15%;
  position: relative;
}

.feature_D .blob {
  position: absolute;
  width: 90%;
  height: 120%;
  top: 0;
  left: 0;
}

.feature_D .title {
  position: relative;
}

.feature_D .card-container {
  position: relative;
  margin-top: 60px;
}

.feature_D .card-column {
  width: 100%;
  float: left;
  padding: 0 20px;
}

.feature_D .card-outter {
  position: relative;
  margin-bottom: 40px;
}

.feature_D .card {
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;

  width: 100%;
  position: relative;

  -webkit-transform-origin: 50% 20px;
  -moz-transform-origin: 50% 20px;
  -o-transform-origin: 50% 20px;
  transform-origin: 50% 20px;

  perspective: 600px;
}

.feature_D .card-content {
  padding-top: 40px;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 7px;

  -moz-box-shadow: 0px 10px 40px 0px #717c8933;
  -webkit-box-shadow: 0px 10px 40px 0px #717c8933;
  -o-box-shadow: 0px 10px 40px 0px #717c8933;
  box-shadow: 0px 10px 40px 0px #717c8933;
  filter: progid:DXImageTransform.Microsoft.Shadow(color=#717c8933, Direction=180, Strength=40);

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.feature_D .card-content *,
.feature_D .card-content *::before,
.feature_D .card-content *::after {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.feature_D .card .front {
  position: relative;
}

.feature_D .card .back {
  position: absolute;
  top: 0;
  left: 0;

  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.feature_D .ww-object-container {
  width: 100%;
  position: relative;
}

.feature_D .handle-container {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.feature_D .handle {
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 20px 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #20acfb; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #20acfb 0%,
    #317cea 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #20acfb 0%,
    #317cea 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #20acfb 0%,
    #317cea 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#20acfb', endColorstr='#317cea',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
.feature_D .handle-pulse {
  position: absolute;
  top: 25%;
  left: 25%;
  border-radius: 100%;
  border: 1px solid white;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.feature_D .handle-pulse-1 {
  width: 14px;
  height: 14px;
}
.feature_D .handle-pulse-2 {
  width: 6px;
  height: 6px;
}
.feature_D .handle-pulse-3 {
  animation: feature_D-handle-pulse 1.5s infinite;
  animation-timing-function: linear;
}
@keyframes feature_D-handle-pulse {
  0% {
    width: 0px;
    height: 0px;
  }
  80% {
    opacity: 1;
    width: 24px;
    height: 24px;
  }
  100% {
    opacity: 0;
    width: 30px;
    height: 30px;
  }
}
@media (min-width: 768px) {
  .feature_D .card-column {
    width: 33.3333%;
  }
  .feature_D .card-outter {
    opacity: 0;
  }
  .feature_D .card-outter.animate {
    opacity: 1;
    animation: feature_D-bounce 2s;
  }
  .feature_D .card-1.animate .card-string {
    animation: feature_D-anti-bounce-1 2s;
    height: 100px;
  }
  .feature_D .card-2.animate .card-string {
    animation: feature_D-anti-bounce-2 2s;
    height: 200px;
  }
  .feature_D .card-3.animate .card-string {
    animation: feature_D-anti-bounce-3 2s;
    height: 300px;
  }
  @keyframes feature_D-bounce {
    0% {
      -moz-transform: translateY(-60px);
      -ms-transform: translateY(-60px);
      -webkit-transform: translateY(-60px);
      transform: translateY(-60px);
      opacity: 0;
    }
    20%,
    60% {
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
    40% {
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @keyframes feature_D-anti-bounce-1 {
    0% {
      height: 40px;
    }
    20%,
    60% {
      height: 100px;
    }
    40% {
      height: 85px;
    }
  }
  @keyframes feature_D-anti-bounce-2 {
    0% {
      height: 140px;
    }
    20%,
    60% {
      height: 200px;
    }
    40% {
      height: 185px;
    }
  }
  @keyframes feature_D-anti-bounce-3 {
    0% {
      height: 240px;
    }
    20%,
    60% {
      height: 300px;
    }
    40% {
      height: 285px;
    }
  }
  .feature_D .card-string {
    position: absolute;
    width: 0;
    height: 100px;
    top: 20px;
    left: 50%;
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
    border-left: 1px #9da1a5 solid;
    z-index: 1;
  }
  .feature_D .card-string::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100px;
    top: 0;
    left: 0;
    -webkit-transform: translate(-3px, -50%);
    -moz-transform: translate(-3px, -50%);
    -o-transform: translate(-3px, -50%);
    transform: translate(-3px, -50%);
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: #20adfc;
  }
  .feature_D .card-string::after {
    content: "";
    position: absolute;
    width: 0;
    height: 100px;
    bottom: 0;
    left: 0;
    -webkit-transform: translate(-5.5px, 50%);
    -moz-transform: translate(-5.5px, 50%);
    -o-transform: translate(-5.5px, 50%);
    transform: translate(-5.5px, 50%);
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 2px solid #20adfc;
  }
  .feature_D .card-1 .card-string {
    height: 40px;
  }
  .feature_D .card-2 {
    margin-top: 100px;
  }
  .feature_D .card-2 .card-string {
    height: 140px;
  }
  .feature_D .card-3 {
    margin-top: 200px;
  }
  .feature_D .card-3 .card-string {
    height: 240px;
  }
}
</style>
