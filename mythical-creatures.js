const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const firstCreature = mythicalCreatures.find(function(creature) {
    return creature.type === "Water";
});

console.log(firstCreature.name);

const findIdx = mythicalCreatures.findIndex(function(creature) {
    return creature.name === "Griffin";
});

console.log(findIdx);

const creatureLastSeen = mythicalCreatures.find(function(creature) {
    return creature.lastSeen === "Enchanted Forest";
});

console.log(creatureLastSeen.name);