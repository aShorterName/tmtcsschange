addLayer("p", {//just read the docs...
    name: "prestige",
    symbol: "Main",
    position: 1,
    color: "#4BDC13",
    type: "none",
	startData() {
		return {
			vel: new Decimal(0),
			points: new Decimal(0)
		}
	},
	tooltip: "",
	update(dt) {
		player.p.vel = player.p.vel.add(new Decimal(1).mul(dt))
	},
	tabFormat: [["raw-html", ()=>("You have gone a total of "+formatDistance(player.points)+ " ("+formatDistance(player.p.vel)+"/s)<br>Your current velocity is "+formatDistance(player.p.vel)+"/s (1 m/s)")], "upgrades"],
    row: 0,
    hotkeys: [
    ],
    layerShown(){return true}
})
addLayer("d", {
    symbol: "Things",
    position: 1,
    color: "#6666aa",
    type: "normal",
	startData() {
		return {
			vel: new Decimal(0),
			points: new Decimal(0)
		}
	},
	upgrades: {
		11: {
			title: "gaming",
			cost: 1
		}
	},
	milestones: {
		1: {
			requirementDescription: "absolutely not like the mlt ones [get 10 undefined]",
			done() {return player.d.points.gte(10)}
		}
	},
	challenges: {
		11: {
			name: "Timewall gaming",
			challengeDescription: "completes at 100 km",
			canComplete: function() {return player.points.gte(DISTANCES.km*100)},
		},
	},
	buyables: {
		11: {
			cost(x) { return new Decimal(2).pow(x) },
			display() { return "Timewall<br>Cost:" + tmp[this.layer].buyables[this.id].cost},
			canAfford() { return player[this.layer].points.gte(this.cost()) },
			buy() {
				player[this.layer].points = player[this.layer].points.sub(this.cost())
				setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
			},
		},
	},
	clickables: {
		11:{
			display() {return "Does nothing!"},
			unlocked: true,
			canClick: true
		}
	},
	tooltip: "",
	baseAmount() {return player.points},
    row: 1,
    hotkeys: [
    ],
    layerShown(){return true}
})