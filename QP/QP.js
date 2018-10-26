AR.log("QP AR v1.0");
var canClickFish=false;
var backgroundFish=null;
var url_1=null;
var url_2=null;
var url_3=null;
AR.onload = function() {
	AR.showLifeFollowBar(true);
	AR.play("Bone021#Default",0);
	AR.play("Bone042#Default",0);
	AR.play("Bone016#Default",0);
	AR.play("Bone038#Default",0);
	AR.play("Bone034#Default",0);
	AR.play("Bone011#Default",0);
	AR.play("Bone006#Default",0);
	AR.play("Bone030#Default",0);
	AR.play("Bone001#Default",0);
	AR.play("Bone026#Default",0);
	AR.play("joint1#Default",0);
	AR.play("Point023#Default",0);
    PlayFishesAnimation();  
    EnvironmentAnimation();
	AR.audio_play("bundle/sounds/bgm.mp3");
	AR.setInterval(function(){
		AR.audio_play("bundle/sounds/bgm.mp3");
	},13000)

    AR.set_visible("UI1_beijing",true);
    backgroundFish=AR.setTimeout(function(){
		AR.set_visible("UI1_zuoyou",true);

		AR.setTimeout(function(){
			AR.set_visible("UI1_zuoyou",false);			
		},3000)
		
        AR.set_visible("UI1_beijing",false);
        canClickFish=true;
        AR.set_visible("UI1_fudai",true);
        AR.clearTimeout(backgroundFish);
    },5000);
};

AR.onbegin = function(clipId) {
};

AR.onend = function(clipId) {
};

AR.onclick = function(nodeId, x, y) {
    if(nodeId=="UI1_beijing"){
        AR.set_visible(nodeId,false);
        AR.set_visible("UI1_zuoyou",false);
        if(backgroundFish!=null)
         AR.clearTimeout(backgroundFish);
        AR.set_visible("UI1_fudai",true);
        canClickFish=true;
    };
    if(nodeId=="UI1_fudai"){
        antHelper.getTicket("fudai");
    };

    if(nodeId=="UI2_guanbi"){
        AR.set_visible("group_UI2",false);
        AR.set_visible("group_UI3",true);
    };

    if(nodeId=="UI3_zaiwan"){
        AR.set_visible("group_UI3",false);
        AR.set_visible("group_Fish_Box",true);
        AR.set_visible("group_R_Fish",true);
        AR.set_visible("group_Y_Fish",true);
        AR.set_visible("group_UI1",true);
        AR.set_visible("UI1_fudai",true);
    };

    if(nodeId=="UI2_pick"){
        antHelper.getTicket("pick");
    };

    if(nodeId=="UI2_daizou"){
        antHelper.getTicket("daizou");
    };


    if(nodeId=="UI3_tuichu"){
        AR.exit();
	};
	
	if(nodeId=="Click"){
		antHelper.getTicket("jieshuye");
	}

    if(canClickFish)
        OnClickFish(nodeId);
};






function EnvironmentAnimation() {
    for (var i = 680; i < (680 + 35); i++) {
        AR.play("Bone" + i + "#Default");
    }

    AR.particle_emit("TeXiao_Lizi",true);
}

function PlayFishesAnimation() {
    var num;
    AR.play("group_Fish_Box#Default",0);
    for (var i = 5; i < 84; i++) {
        if (i < 10)
            num = "00" + i;
        else
            num = "0" + i;
        AR.play("Point" + num + "#Default",0);
    }
}


function OnClickFish(_nodeId){
	if(_nodeId==null|| _nodeId.indexOf("Fish")<0)return;   
	AR.audio_play("bundle/sounds/click.mp3");
    if(_nodeId.indexOf("R_Fish_Box")>=0){
        //TODO:中奖
        AR.set_visible("group_UI2",true);
        AR.set_visible("group_UI1",false);
        AR.set_visible("group_Fish_Box",false);
        AR.set_visible("group_R_Fish",false);
        AR.set_visible("group_Y_Fish",false);
		AR.set_visible("UI1_wenzi",false); 
		//AR.set_texture("UI2_beijing","bundle/views/jieshuye"+Math.round(Math.random()*3)%3+".png");
    }
    else{
        //TODO: 未中奖
        var tmp_Index =Math.abs(Math.floor(Math.random()*10)%4);
        AR.set_texture("UI1_wenzi","bundle/tips/tishi"+tmp_Index+".png");
        AR.set_visible("UI1_wenzi",true); 
        AR.setTimeout(function(){
            AR.set_visible("UI1_wenzi",false); 
        },2000);
    }
}



;
(function(w) {
	var o = 0;
	var A = "";
	var e = 8;

	function m(G) {
		return p(j(r(G), G.length * e))
	}

	function k(G) {
		return x(j(r(G), G.length * e))
	}

	function l(G) {
		return B(j(r(G), G.length * e))
	}

	function y(H, G) {
		return p(s(H, G))
	}

	function i(H, G) {
		return x(s(H, G))
	}

	function C(H, G) {
		return B(s(H, G))
	}

	function E() {
		return m("abc") == "900150983cd24fb0d6963f7d28e17f72"
	}
	var f = "300000000";
	var D = "D88DB9077BE481F747CD4BA24BAD8B23";

	function j(H, L) {
		H[L >> 5] |= 128 << ((L) % 32);
		H[(((L + 64) >>> 9) << 4) + 14] = L;
		var G = 1732584193;
		var I = -271733879;
		var J = -1732584194;
		var K = 271733878;
		for (var O = 0; O < H.length; O += 16) {
			var M = G;
			var N = I;
			var P = J;
			var Q = K;
			G = b(G, I, J, K, H[O + 0], 7, -680876936);
			K = b(K, G, I, J, H[O + 1], 12, -389564586);
			J = b(J, K, G, I, H[O + 2], 17, 606105819);
			I = b(I, J, K, G, H[O + 3], 22, -1044525330);
			G = b(G, I, J, K, H[O + 4], 7, -176418897);
			K = b(K, G, I, J, H[O + 5], 12, 1200080426);
			J = b(J, K, G, I, H[O + 6], 17, -1473231341);
			I = b(I, J, K, G, H[O + 7], 22, -45705983);
			G = b(G, I, J, K, H[O + 8], 7, 1770035416);
			K = b(K, G, I, J, H[O + 9], 12, -1958414417);
			J = b(J, K, G, I, H[O + 10], 17, -42063);
			I = b(I, J, K, G, H[O + 11], 22, -1990404162);
			G = b(G, I, J, K, H[O + 12], 7, 1804603682);
			K = b(K, G, I, J, H[O + 13], 12, -40341101);
			J = b(J, K, G, I, H[O + 14], 17, -1502002290);
			I = b(I, J, K, G, H[O + 15], 22, 1236535329);
			G = h(G, I, J, K, H[O + 1], 5, -165796510);
			K = h(K, G, I, J, H[O + 6], 9, -1069501632);
			J = h(J, K, G, I, H[O + 11], 14, 643717713);
			I = h(I, J, K, G, H[O + 0], 20, -373897302);
			G = h(G, I, J, K, H[O + 5], 5, -701558691);
			K = h(K, G, I, J, H[O + 10], 9, 38016083);
			J = h(J, K, G, I, H[O + 15], 14, -660478335);
			I = h(I, J, K, G, H[O + 4], 20, -405537848);
			G = h(G, I, J, K, H[O + 9], 5, 568446438);
			K = h(K, G, I, J, H[O + 14], 9, -1019803690);
			J = h(J, K, G, I, H[O + 3], 14, -187363961);
			I = h(I, J, K, G, H[O + 8], 20, 1163531501);
			G = h(G, I, J, K, H[O + 13], 5, -1444681467);
			K = h(K, G, I, J, H[O + 2], 9, -51403784);
			J = h(J, K, G, I, H[O + 7], 14, 1735328473);
			I = h(I, J, K, G, H[O + 12], 20, -1926607734);
			G = v(G, I, J, K, H[O + 5], 4, -378558);
			K = v(K, G, I, J, H[O + 8], 11, -2022574463);
			J = v(J, K, G, I, H[O + 11], 16, 1839030562);
			I = v(I, J, K, G, H[O + 14], 23, -35309556);
			G = v(G, I, J, K, H[O + 1], 4, -1530992060);
			K = v(K, G, I, J, H[O + 4], 11, 1272893353);
			J = v(J, K, G, I, H[O + 7], 16, -155497632);
			I = v(I, J, K, G, H[O + 10], 23, -1094730640);
			G = v(G, I, J, K, H[O + 13], 4, 681279174);
			K = v(K, G, I, J, H[O + 0], 11, -358537222);
			J = v(J, K, G, I, H[O + 3], 16, -722521979);
			I = v(I, J, K, G, H[O + 6], 23, 76029189);
			G = v(G, I, J, K, H[O + 9], 4, -640364487);
			K = v(K, G, I, J, H[O + 12], 11, -421815835);
			J = v(J, K, G, I, H[O + 15], 16, 530742520);
			I = v(I, J, K, G, H[O + 2], 23, -995338651);
			G = a(G, I, J, K, H[O + 0], 6, -198630844);
			K = a(K, G, I, J, H[O + 7], 10, 1126891415);
			J = a(J, K, G, I, H[O + 14], 15, -1416354905);
			I = a(I, J, K, G, H[O + 5], 21, -57434055);
			G = a(G, I, J, K, H[O + 12], 6, 1700485571);
			K = a(K, G, I, J, H[O + 3], 10, -1894986606);
			J = a(J, K, G, I, H[O + 10], 15, -1051523);
			I = a(I, J, K, G, H[O + 1], 21, -2054922799);
			G = a(G, I, J, K, H[O + 8], 6, 1873313359);
			K = a(K, G, I, J, H[O + 15], 10, -30611744);
			J = a(J, K, G, I, H[O + 6], 15, -1560198380);
			I = a(I, J, K, G, H[O + 13], 21, 1309151649);
			G = a(G, I, J, K, H[O + 4], 6, -145523070);
			K = a(K, G, I, J, H[O + 11], 10, -1120210379);
			J = a(J, K, G, I, H[O + 2], 15, 718787259);
			I = a(I, J, K, G, H[O + 9], 21, -343485551);
			G = u(G, M);
			I = u(I, N);
			J = u(J, P);
			K = u(K, Q)
		}
		return Array(G, I, J, K)
	}

	function c(G, J, K, L, H, I) {
		return u(z(u(u(J, G), u(L, I)), H), K)
	}

	function b(K, L, G, H, M, I, J) {
		return c((L & G) | ((~L) & H), K, L, M, I, J)
	}

	function h(K, L, G, H, M, I, J) {
		return c((L & H) | (G & (~H)), K, L, M, I, J)
	}

	function v(K, L, G, H, M, I, J) {
		return c(L ^ G ^ H, K, L, M, I, J)
	}

	function a(K, L, G, H, M, I, J) {
		return c(G ^ (L | (~H)), K, L, M, I, J)
	}

	function s(M, J) {
		var K = r(M);
		if (K.length > 16) {
			K = j(K, M.length * e)
		}
		var H = Array(16),
			L = Array(16);
		for (var G = 0; G < 16; G++) {
			H[G] = K[G] ^ 909522486;
			L[G] = K[G] ^ 1549556828
		}
		var I = j(H.concat(r(J)), 512 + J.length * e);
		return j(L.concat(I), 512 + 128)
	}

	function u(H, I) {
		var J = (H & 65535) + (I & 65535);
		var G = (H >> 16) + (I >> 16) + (J >> 16);
		return (G << 16) | (J & 65535)
	}

	function z(H, G) {
		return (H << G) | (H >>> (32 - G))
	}

	function r(I) {
		var J = Array();
		var H = (1 << e) - 1;
		for (var G = 0; G < I.length * e; G += e) {
			J[G >> 5] |= (I.charCodeAt(G / e) & H) << (G % 32)
		}
		return J
	}

	function B(J) {
		var I = "";
		var H = (1 << e) - 1;
		for (var G = 0; G < J.length * 32; G += e) {
			I += String.fromCharCode((J[G >> 5] >>> (G % 32)) & H)
		}
		return I
	}

	function p(J) {
		var G = o ? "0123456789ABCDEF" : "0123456789abcdef";
		var I = "";
		for (var H = 0; H < J.length * 4; H++) {
			I += G.charAt((J[H >> 2] >> ((H % 4) * 8 + 4)) & 15) + G.charAt((J[H >> 2] >> ((H % 4) * 8)) & 15)
		}
		return I
	}

	function x(K) {
		var L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var I = "";
		for (var G = 0; G < K.length * 4; G += 3) {
			var J = (((K[G >> 2] >> 8 * (G % 4)) & 255) << 16) | (((K[G + 1 >> 2] >> 8 * ((G + 1) % 4)) & 255) << 8) | ((K[G + 2 >> 2] >> 8 * ((G + 2) % 4)) & 255);
			for (var H = 0; H < 4; H++) {
				if (G * 8 + H * 6 > K.length * 32) {
					I += A
				} else {
					I += L.charAt((J >> 6 * (3 - H)) & 63)
				}
			}
		}
		return I
	}

	function n() {
		_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		this.encode = function(N) {
			var O = "";
			var H, J, L, G, I, K, M;
			var P = 0;
			N = _utf8_encode(N);
			while (P < N.length) {
				H = N.charCodeAt(P++);
				J = N.charCodeAt(P++);
				L = N.charCodeAt(P++);
				G = H >> 2;
				I = ((H & 3) << 4) | (J >> 4);
				K = ((J & 15) << 2) | (L >> 6);
				M = L & 63;
				if (isNaN(J)) {
					K = M = 64
				} else {
					if (isNaN(L)) {
						M = 64
					}
				}
				O = O + _keyStr.charAt(G) + _keyStr.charAt(I) + _keyStr.charAt(K) + _keyStr.charAt(M)
			}
			return O
		};
		this.decode = function(N) {
			var O = "";
			var H, J, L;
			var G, I, K, M;
			var P = 0;
			N = N.replace(/[^A-Za-z0-9\+\/\=]/g, "");
			while (P < N.length) {
				G = _keyStr.indexOf(N.charAt(P++));
				I = _keyStr.indexOf(N.charAt(P++));
				K = _keyStr.indexOf(N.charAt(P++));
				M = _keyStr.indexOf(N.charAt(P++));
				H = (G << 2) | (I >> 4);
				J = ((I & 15) << 4) | (K >> 2);
				L = ((K & 3) << 6) | M;
				O = O + String.fromCharCode(H);
				if (K != 64) {
					O = O + String.fromCharCode(J)
				}
				if (M != 64) {
					O = O + String.fromCharCode(L)
				}
			}
			O = _utf8_decode(O);
			return O
		};
		_utf8_encode = function(H) {
			H = H.replace(/\r\n/g, "\n");
			var G = "";
			for (var I = 0; I < H.length; I++) {
				var J = H.charCodeAt(I);
				if (J < 128) {
					G += String.fromCharCode(J)
				} else {
					if ((J > 127) && (J < 2048)) {
						G += String.fromCharCode((J >> 6) | 192);
						G += String.fromCharCode((J & 63) | 128)
					} else {
						G += String.fromCharCode((J >> 12) | 224);
						G += String.fromCharCode(((J >> 6) & 63) | 128);
						G += String.fromCharCode((J & 63) | 128)
					}
				}
			}
			return G
		};
		_utf8_decode = function(J) {
			var G = "";
			var H = 0;
			var I = c1 = c2 = 0;
			while (H < J.length) {
				I = J.charCodeAt(H);
				if (I < 128) {
					G += String.fromCharCode(I);
					H++
				} else {
					if ((I > 191) && (I < 224)) {
						c2 = J.charCodeAt(H + 1);
						G += String.fromCharCode(((I & 31) << 6) | (c2 & 63));
						H += 2
					} else {
						c2 = J.charCodeAt(H + 1);
						c3 = J.charCodeAt(H + 2);
						G += String.fromCharCode(((I & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
						H += 3
					}
				}
			}
			return G
		}
	}
	var d = function(G) {
		this.project_id = G.projectId;
		this.userId = null;
		this.nickName = null;
		this.avatar = null;
		this.gender = null;
		this.userAuth()
	};
	d.prototype = {
		extend: function(I, G) {
			for (var H in G) {
				I[H] = G[H]
			}
			return I
		},
		series: function(J, G, H) {
			var H = H || "0";
			var J = J + "";
			var I = new Array(G - J.length + 1).join(H) + J;
			return J.length >= G ? J : I
		},
		toRadian: function(G) {
			return G * Math.PI / 180
		},
		toDegree: function(G) {
			return G / Math.PI * 180
		},
		randomNum: function(H, M, I) {
			var G = [];
			var K;
			for (var L = 0; L < H; L++) {
				K = Math.floor(Math.random() * (I - M + 1) + M);
				for (var J = 0; J < G.length; J++) {
					if (K == G[J]) {
						K = Math.floor(Math.random() * (I - M + 1) + M);
						J = -1
					}
				}
				G.push(K)
			}
			return G
		},
		getArrayItems: function(G, I) {
			var M = [];
			for (var H in G) {
				M.push(G[H])
			}
			var K = [];
			for (var J = 0; J < I; J++) {
				if (M.length > 0) {
					var L = Math.floor(Math.random() * M.length);
					K[J] = M[L];
					M.splice(L, 1)
				} else {
					break
				}
			}
			return K
		},
		quaternionFromEuler: function(Q, O, N) {
			var L = Math.cos(Q / 2);
			var J = Math.cos(O / 2);
			var I = Math.cos(N / 2);
			var S = Math.sin(Q / 2);
			var R = Math.sin(O / 2);
			var P = Math.sin(N / 2);
			var G = S * J * I + L * R * P;
			var M = L * R * I - S * J * P;
			var H = L * J * P + S * R * I;
			var K = L * J * I - S * R * P;
			return [G, M, H, K]
		},
		getDeviceInfo: function(G) {
			var H = AR.getEnvProp("arUserAgent");
			if (!H) {
				return false
			}
			switch (G) {
				case "platform":
					var I = H.split(";")[0].split(" ")[1];
					break;
				case "device":
					var I = H.split(";")[1].split(" ")[1];
					break;
				case "screen":
					var I = H.split(";")[3].split(" ")[1];
					break;
				case "screenWidth":
					var I = AR.getEnvProp("screenWidth");
					break;
				case "screenHeight":
					var I = AR.getEnvProp("screenHeight");
					break
			}
			return I
		},
		createAnimation: function(G) {
			AR.create_animation(G.animId, G.nodeId, G.propertyId, G.keyCount, G.keyTimes, G.keyValues, G.type)
		},
		frameAnimation: function(I) {
			var N = this;
			var H = 1;
			var G = {
				startNum: 0,
				seriesLength: 3,
				frameRate: 42,
				repeat: 0,
				frameAnimateCallBack: null
			};
			var L = this.extend(G, I);

			function M() {
				var O = L.startNum + "";
				return N.series(O, L.seriesLength, L.filler)
			}

			function K() {
				return L.imagePath + M() + ".png"
			}

			function J() {
				var P = L.startNum;
				for (var O = 0; O < L.imagesCount; O++) {
					frameTimer = AR.setTimeout(function() {
						var Q = K();
						AR.set_texture(L.needTextureNode, Q, 0);
						// if (__version != "0.0.2") {
						AR.remove_tex_cache(K())
						// }
						L.startNum++;
						if (L.startNum - P >= L.imagesCount) {
							H++;
							if (L.repeat >= H) {
								L.startNum = P;
								J()
							} else {
								if (L.repeat == 0) {
									L.startNum = P;
									J()
								}
							}
							if (typeof L.callBack === "function") {
								L.callBack()
							}
						}
					}, O * L.frameRate)
				}
			}
			J()
		},
		countDown: function(K) {
			var G = K.totalTime;
			var J = G % 10;
			var I = Math.floor(G / 10) % 10;
			AR.set_texture(K.firstNode, K.pathPart1 + J + K.pathPart2);
			AR.set_texture(K.secondNode, K.pathPart1 + I + K.pathPart2);
			var H = AR.setInterval(function() {
				G -= 1;
				var M = G % 10;
				var L = Math.floor(G / 10) % 10;
				AR.set_texture(K.firstNode, K.pathPart1 + M + K.pathPart2);
				AR.set_texture(K.secondNode, K.pathPart1 + L + K.pathPart2);
				if (G <= 0) {
					AR.clearInterval(H);
					K.timeOutCallBack()
				}
			}, 1000)
		},
		setVisible: function(J, H) {
			if (typeof J === "string") {
				AR.set_visible(J, H)
			} else {
				if (typeof J === "object") {
					for (var I = 0, G = J.length; I < G; I++) {
						AR.set_visible(J[I], H)
					}
				}
			}
		},
		playAnimation: function(I, H, J) {
			if (typeof I === "string") {
				AR.play(I + "#" + H, J)
			} else {
				if (typeof I === "object") {
					for (var G = 0; G < I.length; G++) {
						AR.play(I[G] + "#" + H[G], J[G])
					}
				}
			}
		},
		playVideo: function(K, I, J, H) {
			if (K) {
				var G = {};
				G.transparent = true;
				AR.set_video(I, J, H, JSON.stringify(G));
				AR.play_video(I)
			} else {
				AR.set_video(I, J, H);
				AR.play_video(I)
			}
		},
		userAuth: function(I) {
			var K = this;
			var G = {
				appId: "2016071501621644",
				scopeNicks: ["auth_base"],
				extInfo: null,
				isvAppId: null,
				authCallback: function(M, L) {
					if (M) {
						J()
					} else {
						AR.log("auth_base failed " + L.error)
					}
				}
			};
			var H = this.extend(G, I);
			AR.auth(H.appId, H.scopeNicks, H.extInfo, H.authCallback, H.isvAppId);

			function J() {
				AR.getAuthUserInfo({
					appId: H.appId,
					callback: function(M, L) {
						if (M) {
							K.nickName = L.userInfo.nickName;
							K.avatar = L.userInfo.avatar;
							K.gender = L.userInfo.gender;
							K.userId = L.userInfo.userId;
							if (K.nickName == null || K.nickName == "") {
								K.nickName = "default"
							}
							K.getUserInfos()
						} else {
							AR.log("getAuthUserInfo failed, " + L.error)
						}
					}
				})
			}
		},
		requestInfo: function(J, I, G, N) {
			var L = Math.round(new Date().getTime() / 1000) + "";
			var O = "https://api.gxar.com/rest.php";
			var H = JSON.stringify(J);
			var M = D + "&action=" + I + "&appid=" + f + "&nonce=" + L + "&params=" + H + "&timestamp=" + L;
			var K = m(M).toUpperCase();
			AR.request({
				url: O,
				data: {
					data: H
				},
				header: {
					"content-type": "application/json",
					"appid": f,
					"action": I,
					"nonce": L,
					"timestamp": L,
					"sign": K,
					"program": "AR"
				},
				method: "POST",
				success: G,
				fail: N
			})
		},
		getUserInfos: function() {
			var I = "com.gxar.project.user.logs.record";
			var H = new n();
			var G = {};
			G.project_id = this.project_id;
			G.pid = this.userId;
			G.nickname = H.encode(this.nickName);
			G.avatar = this.avatar;
			Curgender = this.gender;
			G.gender = this.gender;
			G.alipay_version = AR.getEnvProp("alipayVersion");
			G.system_volume = AR.getEnvProp("systemVolume");
			G.resource_version = AR.getEnvProp("alipayBundleVersion");
			G.resource_compatible_version = AR.getEnvProp("alipayCompatibleVersion");
			G.tracking_mode = AR.getEnvProp("trackMode");
			G.runtime_environment = AR.getEnvProp("arUserAgent");
			G.source = 1;
			G.source_remark = AR.getEnvProp("rpc_factorName");
			this.requestInfo(G, I, t, g)
		},
		getTicket: function(G) {
			var I = "com.gxar.dev.ticket.get.voucher";
			var H = {};
			H.project_id = this.project_id;
			H.pid = this.userId;
			H.tag = G;
			this.requestInfo(H, I, q, F)
		}
	};
	var t = function(G) {
		AR.log(G.data)
	};
	var g = function(G) {
		AR.log("faile" + G.statusCode)
	};
	var q = function(G) {
		var I = JSON.parse(G.data);
        var H = I.data.url;
		AR.open_url(H)
	};
	var F = function(G) {
		AR.log("faile" + G.statusCode)
	};
	w.AntHelper = d
})(this);

var antHelper = new AntHelper({
	// 项目ID，必填
	projectId: "578869460"
});