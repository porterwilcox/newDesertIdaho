//Public
export default class Poems1 {
    nationalEmpire = `
    Hungry and afraid they soldiered onward </br>
    Finding peace in the simplest of things— </br>
    A cumulus picture in the expansive blue afternoon sky,
    The greening yard of an early Idaho spring, <br />
    Flowers, so beautiful, vivid, and real. <br />
    Heroically they survived the dying days <br />
    Of the greatest national empire of debt <br />
    The multiverse could create, yet <br />
    The vicious cycle would start anew, as <br />
    The banking cartel strictly enforced <br />
    The use of their new global money, <br />
    Mayer Anselm Rothschild’s ancestor <br />
    Repeating from his island pink palace <br />
    That he who controls the money supply <br />
    Cares not who makes the laws.`

    sansAnesthesia = `
    With god-like furry, and <br />
    The temperament of a rogue wave, <br />
    He steeled himself against the others. <br />
    How dare they be unaware <br />
    Of the devilish plot <br />
    To marginalize, separate, and shear. <br />
    Fear and worry strangled dissents, <br />
    Almost all became witting accomplices <br />
    To their own confinements, yet <br />
    The virulent debasements did sneak past them <br />
    In the night of hundred year scheme, <br />
    Bankers, business, politicians dissected them <br />
    Sans anesthesia. <br />
    Most were pleased for the scraps <br />
    Tossed to them from under the table, <br />
    He was not. <br />
    He committed to stand with Julian, <br />
    As truth will break their spines.`


    poems1() {
        let data = 
        [
            {id: "national-empire", img: "national-empire.jpg", title: "National Empire", poem: this.nationalEmpire},
            {id: "sans-anesthesia", img: "rogue-wave.jpg", title: "Sans Anesthesia", poem: this.sansAnesthesia}
        ]
        return data
    }
}