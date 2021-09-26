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