(function (doc) {

    "use strict";

    if (doc.phrases !== undefined) {
        throw "phrases already exists";
    }

    doc.phrases = function (on, out) {

        const blocks = {
            adjectives: [
                "dumb",
                "stupid",
                "gay",
                "illegal",
                "democratic",
                "racist",
                "fascist",
                "feminist",
                "young"
            ],
            daemons: [
                "liberals",
                "teenagers",
                "lesbians",
                "gays",
                "muslims",
                "snowflakes",
                "mexicans",
                "little rocket men",
                "blacks",
                "activists",
                "immigrants",
                "aliens"
            ],
            actions: [
                "should",
                "must",
                "have to"
            ],
            things: [
                "abort their babies",
                "shut up about guns",
                "not care about politics",
                "defend their children with an AR-15",
                "give up their rights",
                "be judged by their generation",
                "burn the quran",
                "work below minimal wage",
                "be deported to mexico",
                "support ending obama care",
                "be enslaved"
            ],
            reasons: [
                "communism",
                "of their fake media",
                "of their lifestyle",
                "of drugs",
                "of gods law",
                "of some black sheeps in politics",
                "of the market",
                "everything else would be north korea",
                "my button is bigger",
                "the law is too complicated to read",
                "it is our constitutional right",
                "its in the bible",
                "taxation is theft"
            ]
        };

        const random_from = function (arr) {
            const i = Math.floor(Math.random() * arr.length);
            return arr[i];
        };

        const generate = function () {
            const adjective = random_from(blocks.adjectives);
            const daemon = random_from(blocks.daemons);
            const thing = random_from(blocks.things);
            const reason = random_from(blocks.reasons);
            const action = random_from(blocks.actions);
            return `${adjective} ${daemon} ${action} ${thing} because ${reason}`.toUpperCase();
        };

        document.getElementById(on).onclick = function() {
            document.getElementById(out).innerHTML = generate();
        };

    };

}(document));

