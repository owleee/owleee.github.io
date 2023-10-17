/* Decay types: //
IS: Infinitely stable (?)
B-: Beta (minus) decay: A neutron becomes a proton, emitting an electron and an antineutrino
B+: Beta (plus) decay: A proton becomes a neutron, emitting a positrion and a neutrino
{n}n: Neutron Emission: The nucleus emits {n} neutrons
{n}p: Proton Emission: The nucleus emits {n} protons
EC: Electron capture: Absorbs an inner electron, turning a proton into a neutron
*/

export const table = [
    [
      {
        protons: "0",
        neutrons: "1",
        weight: "1",
        real: true,
        decay: "B-"
      }
    ],
    [
      {
        protons: "1",
        neutrons: "0",
        weight: "1",
        real: true,
        decay: "IS"
      },
      {
        protons: "1",
        neutrons: "1",
        weight: "2",
        real: true,
        decay: "IS"
      },
      {
        protons: "1",
        neutrons: "2",
        weight: "3",
        real: true,
        decay: "B-"
      },
      {
        protons: "1",
        neutrons: "3",
        weight: "4",
        real: true,
        decay: "n"
      },
      {
        protons: "1",
        neutrons: "4",
        weight: "5",
        real: true,
        decay: "2n"
      },
      {
        protons: "1",
        neutrons: "5",
        weight: "6",
        real: false,
        decay: "n"
      },
      {
        protons: "1",
        neutrons: "6",
        weight: "7",
        real: false,
        decay: "2n"
      }
    ],
    [
      {
        protons: "2",
        neutrons: "0",
        weight: "2",
        real: false,
        decay: "p"
      },
      {
        protons: "2",
        neutrons: "1",
        weight: "3",
        real: true,
        decay: "IS"
      },
      {
        protons: "2",
        neutrons: "2",
        weight: "4",
        real: true,
        decay: "IS"
      },
      {
        protons: "2",
        neutrons: "3",
        weight: "5",
        real: true,
        decay: "n"
      },
      {
        protons: "2",
        neutrons: "4",
        weight: "6",
        real: true,
        decay: "B-"
      },
      {
        protons: "2",
        neutrons: "5",
        weight: "7",
        real: true,
        decay: "n"
      },
      {
        protons: "2",
        neutrons: "6",
        weight: "8",
        real: true,
        decay: "B-"
      },
      {
        protons: "2",
        neutrons: "7",
        weight: "9",
        real: true,
        decay: "n"
      },
      {
        protons: "2",
        neutrons: "8",
        weight: "10",
        real: true,
        decay: "2n"
      }
    ],
    [
      {
        protons: "3",
        neutrons: "0",
        weight: "3",
        real: false,
        decay: "p"
      },
      {
        protons: "3",
        neutrons: "1",
        weight: "4",
        real: true,
        decay: "p"
      },
      {
        protons: "3",
        neutrons: "2",
        weight: "5",
        real: true,
        decay: "p"
      },
      {
        protons: "3",
        neutrons: "3",
        weight: "6",
        real: true,
        decay: "IS"
      },
      {
        protons: "3",
        neutrons: "4",
        weight: "7",
        real: true,
        decay: "IS"
      },
      {
        protons: "3",
        neutrons: "5",
        weight: "8",
        real: true,
        decay: "B-"
      },
      {
        protons: "3",
        neutrons: "6",
        weight: "9",
        real: true,
        decay: "B-"
      },
      {
        protons: "3",
        neutrons: "7",
        weight: "10",
        real: true,
        decay: "n"
      },
      {
        protons: "3",
        neutrons: "8",
        weight: "11",
        real: true,
        decay: "B-"
      },
      {
        protons: "3",
        neutrons: "9",
        weight: "12",
        real: false,
        decay: "n"
      },
      {
        protons: "3",
        neutrons: "10",
        weight: "13",
        real: true,
        decay: "2n"
      }
    ],
    [
      {
        protons: "4",
        neutrons: "1",
        weight: "5",
        real: false,
        decay: "p"
      },
      {
        protons: "4",
        neutrons: "2",
        weight: "6",
        real: true,
        decay: "2p"
      },
      {
        protons: "4",
        neutrons: "3",
        weight: "7",
        real: true,
        decay: "EC"
      },
      {
        protons: "4",
        neutrons: "4",
        weight: "8",
        real: true,
        decay: "A"
      },
      {
        protons: "4",
        neutrons: "5",
        weight: "9",
        real: true,
        decay: "IS"
      },
      {
        protons: "4",
        neutrons: "6",
        weight: "10",
        real: true,
        decay: "B-"
      },
      {
        protons: "4",
        neutrons: "7",
        weight: "11",
        real: true,
        decay: "B-"
      },
      {
        protons: "4",
        neutrons: "8",
        weight: "12",
        real: true,
        decay: "B-"
      },
      {
        protons: "4",
        neutrons: "9",
        weight: "13",
        real: false,
        decay: "n"
      },
      {
        protons: "4",
        neutrons: "10",
        weight: "14",
        real: true,
        decay: "B-"
      },
      {
        protons: "4",
        neutrons: "11",
        weight: "15",
        real: true,
        decay: "n"
      },
      {
        protons: "4",
        neutrons: "12",
        weight: "16",
        real: true,
        decay: "2n"
      }
    ],
    [
      {
        protons: "5",
        neutrons: "1",
        weight: "6",
        real: false,
        decay: "2p"
      },
      {
        protons: "5",
        neutrons: "2",
        weight: "7",
        real: true,
        decay: "p"
      },
      {
        protons: "5",
        neutrons: "3",
        weight: "8",
        real: true,
        decay: "B+"
      },
      {
        protons: "5",
        neutrons: "4",
        weight: "9",
        real: true,
        decay: "p"
      },
      {
        protons: "5",
        neutrons: "5",
        weight: "10",
        real: true,
        decay: "IS"
      },
      {
        protons: "5",
        neutrons: "6",
        weight: "11",
        real: true,
        decay: "IS"
      },
      {
        protons: "5",
        neutrons: "7",
        weight: "12",
        real: true,
        decay: "B-"
      },
      {
        protons: "5",
        neutrons: "8",
        weight: "13",
        real: true,
        decay: "B-"
      },
      {
        protons: "5",
        neutrons: "9",
        weight: "14",
        real: true,
        decay: "B-"
      },
      {
        protons: "5",
        neutrons: "10",
        weight: "15",
        real: true,
        decay: "B-"
      },
      {
        protons: "5",
        neutrons: "11",
        weight: "16",
        real: false,
        decay: "n"
      },
      {
        protons: "5",
        neutrons: "12",
        weight: "17",
        real: true,
        decay: "B-"
      },
      {
        protons: "5",
        neutrons: "13",
        weight: "18",
        real: true,
        decay: "n"
      },
      {
        protons: "5",
        neutrons: "14",
        weight: "19",
        real: true,
        decay: "B-"
      },
      {
        protons: "5",
        neutrons: "15",
        weight: "20",
        real: true,
        decay: "n"
      },
      {
        protons: "5",
        neutrons: "16",
        weight: "21",
        real: true,
        decay: "2n"
      }
    ],
    [
      {
        protons: "6",
        neutrons: "2",
        weight: "8",
        real: true,
        decay: "2p"
      },
      {
        protons: "6",
        neutrons: "3",
        weight: "9",
        real: true,
        decay: "B+"
      },
      {
        protons: "6",
        neutrons: "4",
        weight: "10",
        real: true,
        decay: "B+"
      },
      {
        protons: "6",
        neutrons: "5",
        weight: "11",
        real: true,
        decay: "B+"
      },
      {
        protons: "6",
        neutrons: "6",
        weight: "12",
        real: true,
        decay: "IS"
      },
      {
        protons: "6",
        neutrons: "7",
        weight: "13",
        real: true,
        decay: "IS"
      },
      {
        protons: "6",
        neutrons: "8",
        weight: "14",
        real: true,
        decay: "B-"
      },
      {
        protons: "6",
        neutrons: "9",
        weight: "15",
        real: true,
        decay: "B-"
      },
      {
        protons: "6",
        neutrons: "10",
        weight: "16",
        real: true,
        decay: "B-"
      },
      {
        protons: "6",
        neutrons: "11",
        weight: "17",
        real: true,
        decay: "B-"
      },
      {
        protons: "6",
        neutrons: "12",
        weight: "18",
        real: true,
        decay: "B-"
      },
      {
        protons: "6",
        neutrons: "13",
        weight: "19",
        real: true,
        decay: "B-"
      },
      {
        protons: "6",
        neutrons: "14",
        weight: "20",
        real: true,
        decay: "B-"
      },
      {
        protons: "6",
        neutrons: "15",
        weight: "21",
        real: false,
        decay: "n"
      },
      {
        protons: "6",
        neutrons: "16",
        weight: "22",
        real: true,
        decay: "B-"
      },
      {
        protons: "6",
        neutrons: "17",
        weight: "23",
        real: false,
        decay: "n"
      }
    ],
    [
      {
        protons: "7",
        neutrons: "3",
        weight: "10",
        real: false,
        decay: "p"
      },
      {
        protons: "7",
        neutrons: "4",
        weight: "11",
        real: true,
        decay: "p"
      },
      {
        protons: "7",
        neutrons: "5",
        weight: "12",
        real: true,
        decay: "B+"
      },
      {
        protons: "7",
        neutrons: "6",
        weight: "13",
        real: true,
        decay: "B+"
      },
      {
        protons: "7",
        neutrons: "7",
        weight: "14",
        real: true,
        decay: "IS"
      },
      {
        protons: "7",
        neutrons: "8",
        weight: "15",
        real: true,
        decay: "IS"
      },
      {
        protons: "7",
        neutrons: "9",
        weight: "16",
        real: true,
        decay: "B-"
      },
      {
        protons: "7",
        neutrons: "10",
        weight: "17",
        real: true,
        decay: "B-"
      },
      {
        protons: "7",
        neutrons: "11",
        weight: "18",
        real: true,
        decay: "B-"
      },
      {
        protons: "7",
        neutrons: "12",
        weight: "19",
        real: true,
        decay: "B-"
      },
      {
        protons: "7",
        neutrons: "13",
        weight: "20",
        real: true,
        decay: "B-"
      },
      {
        protons: "7",
        neutrons: "14",
        weight: "21",
        real: true,
        decay: "B-"
      },
      {
        protons: "7",
        neutrons: "15",
        weight: "22",
        real: true,
        decay: "B-"
      },
      {
        protons: "7",
        neutrons: "16",
        weight: "23",
        real: true,
        decay: "B-"
      },
      {
        protons: "7",
        neutrons: "17",
        weight: "24",
        real: false,
        decay: "n"
      },
      {
        protons: "7",
        neutrons: "18",
        weight: "25",
        real: false,
        decay: "n"
      }
    ],
    [
      {
        protons: "8",
        neutrons: "3",
        weight: "11",
        real: true,
        decay: "2p"
      },
      {
        protons: "8",
        neutrons: "4",
        weight: "12",
        real: true,
        decay: "2p"
      },
      {
        protons: "8",
        neutrons: "5",
        weight: "13",
        real: true,
        decay: "B+"
      },
      {
        protons: "8",
        neutrons: "6",
        weight: "14",
        real: true,
        decay: "B+"
      },
      {
        protons: "8",
        neutrons: "7",
        weight: "15",
        real: true,
        decay: "B+"
      },
      {
        protons: "8",
        neutrons: "8",
        weight: "16",
        real: true,
        decay: "IS"
      },
      {
        protons: "8",
        neutrons: "9",
        weight: "17",
        real: true,
        decay: "IS"
      },
      {
        protons: "8",
        neutrons: "10",
        weight: "18",
        real: true,
        decay: "IS"
      },
      {
        protons: "8",
        neutrons: "11",
        weight: "19",
        real: true,
        decay: "B-"
      },
      {
        protons: "8",
        neutrons: "12",
        weight: "20",
        real: true,
        decay: "B-"
      },
      {
        protons: "8",
        neutrons: "13",
        weight: "21",
        real: true,
        decay: "B-"
      },
      {
        protons: "8",
        neutrons: "14",
        weight: "22",
        real: true,
        decay: "B-"
      },
      {
        protons: "8",
        neutrons: "15",
        weight: "23",
        real: true,
        decay: "B-"
      },
      {
        protons: "8",
        neutrons: "16",
        weight: "24",
        real: true,
        decay: "B-"
      },
      {
        protons: "8",
        neutrons: "17",
        weight: "25",
        real: true,
        decay: "n"
      },
      {
        protons: "8",
        neutrons: "18",
        weight: "26",
        real: true,
        decay: "2n"
      },
      {
        protons: "8",
        neutrons: "19",
        weight: "27",
        real: false,
        decay: "n"
      },
      {
        protons: "8",
        neutrons: "20",
        weight: "28",
        real: false,
        decay: "2n"
      }
    ],
    [
      {
        protons: "9",
        neutrons: "4",
        weight: "13",
        real: false,
        decay: "p"
      },
      {
        protons: "9",
        neutrons: "5",
        weight: "14",
        real: false,
        decay: "p"
      },
      {
        protons: "9",
        neutrons: "6",
        weight: "15",
        real: true,
        decay: "p"
      },
      {
        protons: "9",
        neutrons: "7",
        weight: "16",
        real: true,
        decay: "p"
      },
      {
        protons: "9",
        neutrons: "8",
        weight: "17",
        real: true,
        decay: "B+"
      },
      {
        protons: "9",
        neutrons: "9",
        weight: "18",
        real: true,
        decay: "B+"
      },
      {
        protons: "9",
        neutrons: "10",
        weight: "19",
        real: true,
        decay: "IS"
      },
      {
        protons: "9",
        neutrons: "11",
        weight: "20",
        real: true,
        decay: "B-"
      },
      {
        protons: "9",
        neutrons: "12",
        weight: "21",
        real: true,
        decay: "B-"
      },
      {
        protons: "9",
        neutrons: "13",
        weight: "22",
        real: true,
        decay: "B-"
      },
      {
        protons: "9",
        neutrons: "14",
        weight: "23",
        real: true,
        decay: "B-"
      },
      {
        protons: "9",
        neutrons: "15",
        weight: "24",
        real: true,
        decay: "B-"
      },
      {
        protons: "9",
        neutrons: "16",
        weight: "25",
        real: true,
        decay: "B-"
      },
      {
        protons: "9",
        neutrons: "17",
        weight: "26",
        real: true,
        decay: "B-"
      },
      {
        protons: "9",
        neutrons: "18",
        weight: "27",
        real: true,
        decay: "B-"
      },
      {
        protons: "9",
        neutrons: "19",
        weight: "28",
        real: true,
        decay: "n"
      },
      {
        protons: "9",
        neutrons: "20",
        weight: "29",
        real: true,
        decay: "B-"
      },
      {
        protons: "9",
        neutrons: "21",
        weight: "30",
        real: false,
        decay: "n"
      },
      {
        protons: "9",
        neutrons: "22",
        weight: "31",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "10",
        neutrons: "5",
        weight: "15",
        real: true,
        decay: "2p"
      },
      {
        protons: "10",
        neutrons: "6",
        weight: "16",
        real: true,
        decay: "2p"
      },
      {
        protons: "10",
        neutrons: "7",
        weight: "17",
        real: true,
        decay: "B+"
      },
      {
        protons: "10",
        neutrons: "8",
        weight: "18",
        real: true,
        decay: "B+"
      },
      {
        protons: "10",
        neutrons: "9",
        weight: "19",
        real: true,
        decay: "B+"
      },
      {
        protons: "10",
        neutrons: "10",
        weight: "20",
        real: true,
        decay: "IS"
      },
      {
        protons: "10",
        neutrons: "11",
        weight: "21",
        real: true,
        decay: "IS"
      },
      {
        protons: "10",
        neutrons: "12",
        weight: "22",
        real: true,
        decay: "IS"
      },
      {
        protons: "10",
        neutrons: "13",
        weight: "23",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "14",
        weight: "24",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "15",
        weight: "25",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "16",
        weight: "26",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "17",
        weight: "27",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "18",
        weight: "28",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "19",
        weight: "29",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "20",
        weight: "30",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "21",
        weight: "31",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "22",
        weight: "32",
        real: true,
        decay: "B-"
      },
      {
        protons: "10",
        neutrons: "23",
        weight: "33",
        real: false,
        decay: "n"
      },
      {
        protons: "10",
        neutrons: "24",
        weight: "34",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "11",
        neutrons: "6",
        weight: "17",
        real: true,
        decay: "p"
      },
      {
        protons: "11",
        neutrons: "7",
        weight: "18",
        real: true,
        decay: "p"
      },
      {
        protons: "11",
        neutrons: "8",
        weight: "19",
        real: true,
        decay: "p"
      },
      {
        protons: "11",
        neutrons: "9",
        weight: "20",
        real: true,
        decay: "B+"
      },
      {
        protons: "11",
        neutrons: "10",
        weight: "21",
        real: true,
        decay: "B+"
      },
      {
        protons: "11",
        neutrons: "11",
        weight: "22",
        real: true,
        decay: "B+"
      },
      {
        protons: "11",
        neutrons: "12",
        weight: "23",
        real: true,
        decay: "IS"
      },
      {
        protons: "11",
        neutrons: "13",
        weight: "24",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "14",
        weight: "25",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "15",
        weight: "26",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "16",
        weight: "27",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "17",
        weight: "28",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "18",
        weight: "29",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "19",
        weight: "30",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "20",
        weight: "31",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "21",
        weight: "32",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "22",
        weight: "33",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "23",
        weight: "34",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "24",
        weight: "35",
        real: true,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "25",
        weight: "36",
        real: false,
        decay: "n"
      },
      {
        protons: "11",
        neutrons: "26",
        weight: "37",
        real: false,
        decay: "B-"
      },
      {
        protons: "11",
        neutrons: "27",
        weight: "38",
        real: false,
        decay: "n"
      },
      {
        protons: "11",
        neutrons: "28",
        weight: "39",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "12",
        neutrons: "7",
        weight: "19",
        real: true,
        decay: "2p"
      },
      {
        protons: "12",
        neutrons: "8",
        weight: "20",
        real: true,
        decay: "B+"
      },
      {
        protons: "12",
        neutrons: "9",
        weight: "21",
        real: true,
        decay: "B+"
      },
      {
        protons: "12",
        neutrons: "10",
        weight: "22",
        real: true,
        decay: "B+"
      },
      {
        protons: "12",
        neutrons: "11",
        weight: "23",
        real: true,
        decay: "B+"
      },
      {
        protons: "12",
        neutrons: "12",
        weight: "24",
        real: true,
        decay: "IS"
      },
      {
        protons: "12",
        neutrons: "13",
        weight: "25",
        real: true,
        decay: "IS"
      },
      {
        protons: "12",
        neutrons: "14",
        weight: "26",
        real: true,
        decay: "IS"
      },
      {
        protons: "12",
        neutrons: "15",
        weight: "27",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "16",
        weight: "28",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "17",
        weight: "29",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "18",
        weight: "30",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "19",
        weight: "31",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "20",
        weight: "32",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "21",
        weight: "33",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "22",
        weight: "34",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "23",
        weight: "35",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "24",
        weight: "36",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "25",
        weight: "37",
        real: false,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "26",
        weight: "38",
        real: true,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "27",
        weight: "39",
        real: false,
        decay: "n"
      },
      {
        protons: "12",
        neutrons: "28",
        weight: "40",
        real: false,
        decay: "B-"
      },
      {
        protons: "12",
        neutrons: "29",
        weight: "41",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "13",
        neutrons: "8",
        weight: "21",
        real: false,
        decay: "p"
      },
      {
        protons: "13",
        neutrons: "9",
        weight: "22",
        real: true,
        decay: "B+"
      },
      {
        protons: "13",
        neutrons: "10",
        weight: "23",
        real: true,
        decay: "B+"
      },
      {
        protons: "13",
        neutrons: "11",
        weight: "24",
        real: true,
        decay: "B+"
      },
      {
        protons: "13",
        neutrons: "12",
        weight: "25",
        real: true,
        decay: "B+"
      },
      {
        protons: "13",
        neutrons: "13",
        weight: "26",
        real: true,
        decay: "B+"
      },
      {
        protons: "13",
        neutrons: "14",
        weight: "27",
        real: true,
        decay: "IS"
      },
      {
        protons: "13",
        neutrons: "15",
        weight: "28",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "16",
        weight: "29",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "17",
        weight: "30",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "18",
        weight: "31",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "19",
        weight: "32",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "20",
        weight: "33",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "21",
        weight: "34",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "22",
        weight: "35",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "23",
        weight: "36",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "24",
        weight: "37",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "25",
        weight: "38",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "26",
        weight: "39",
        real: true,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "27",
        weight: "40",
        real: false,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "28",
        weight: "41",
        real: false,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "29",
        weight: "42",
        real: false,
        decay: "B-"
      },
      {
        protons: "13",
        neutrons: "30",
        weight: "43",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "14",
        neutrons: "8",
        weight: "22",
        real: true,
        decay: "B+"
      },
      {
        protons: "14",
        neutrons: "9",
        weight: "23",
        real: true,
        decay: "B+"
      },
      {
        protons: "14",
        neutrons: "10",
        weight: "24",
        real: true,
        decay: "B+"
      },
      {
        protons: "14",
        neutrons: "11",
        weight: "25",
        real: true,
        decay: "B+"
      },
      {
        protons: "14",
        neutrons: "12",
        weight: "26",
        real: true,
        decay: "B+"
      },
      {
        protons: "14",
        neutrons: "13",
        weight: "27",
        real: true,
        decay: "B+"
      },
      {
        protons: "14",
        neutrons: "14",
        weight: "28",
        real: true,
        decay: "IS"
      },
      {
        protons: "14",
        neutrons: "15",
        weight: "29",
        real: true,
        decay: "IS"
      },
      {
        protons: "14",
        neutrons: "16",
        weight: "30",
        real: true,
        decay: "IS"
      },
      {
        protons: "14",
        neutrons: "17",
        weight: "31",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "18",
        weight: "32",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "19",
        weight: "33",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "20",
        weight: "34",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "21",
        weight: "35",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "22",
        weight: "36",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "23",
        weight: "37",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "24",
        weight: "38",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "25",
        weight: "39",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "26",
        weight: "40",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "27",
        weight: "41",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "28",
        weight: "42",
        real: true,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "29",
        weight: "43",
        real: false,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "30",
        weight: "44",
        real: false,
        decay: "B-"
      },
      {
        protons: "14",
        neutrons: "31",
        weight: "45",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "15",
        neutrons: "9",
        weight: "24",
        real: false,
        decay: "p"
      },
      {
        protons: "15",
        neutrons: "10",
        weight: "25",
        real: false,
        decay: "p"
      },
      {
        protons: "15",
        neutrons: "11",
        weight: "26",
        real: true,
        decay: "B+"
      },
      {
        protons: "15",
        neutrons: "12",
        weight: "27",
        real: true,
        decay: "B+"
      },
      {
        protons: "15",
        neutrons: "13",
        weight: "28",
        real: true,
        decay: "B+"
      },
      {
        protons: "15",
        neutrons: "14",
        weight: "29",
        real: true,
        decay: "B+"
      },
      {
        protons: "15",
        neutrons: "15",
        weight: "30",
        real: true,
        decay: "B+"
      },
      {
        protons: "15",
        neutrons: "16",
        weight: "31",
        real: true,
        decay: "IS"
      },
      {
        protons: "15",
        neutrons: "17",
        weight: "32",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "18",
        weight: "33",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "19",
        weight: "34",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "20",
        weight: "35",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "21",
        weight: "36",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "22",
        weight: "37",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "23",
        weight: "38",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "24",
        weight: "39",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "25",
        weight: "40",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "26",
        weight: "41",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "27",
        weight: "42",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "28",
        weight: "43",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "29",
        weight: "44",
        real: true,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "30",
        weight: "45",
        real: false,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "31",
        weight: "46",
        real: false,
        decay: "B-"
      },
      {
        protons: "15",
        neutrons: "32",
        weight: "47",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "16",
        neutrons: "10",
        weight: "26",
        real: false,
        decay: "2p"
      },
      {
        protons: "16",
        neutrons: "11",
        weight: "27",
        real: true,
        decay: "B+"
      },
      {
        protons: "16",
        neutrons: "12",
        weight: "28",
        real: true,
        decay: "B+"
      },
      {
        protons: "16",
        neutrons: "13",
        weight: "29",
        real: true,
        decay: "B+"
      },
      {
        protons: "16",
        neutrons: "14",
        weight: "30",
        real: true,
        decay: "B+"
      },
      {
        protons: "16",
        neutrons: "15",
        weight: "31",
        real: true,
        decay: "B+"
      },
      {
        protons: "16",
        neutrons: "16",
        weight: "32",
        real: true,
        decay: "IS"
      },
      {
        protons: "16",
        neutrons: "17",
        weight: "33",
        real: true,
        decay: "IS"
      },
      {
        protons: "16",
        neutrons: "18",
        weight: "34",
        real: true,
        decay: "IS"
      },
      {
        protons: "16",
        neutrons: "19",
        weight: "35",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "20",
        weight: "36",
        real: true,
        decay: "IS"
      },
      {
        protons: "16",
        neutrons: "21",
        weight: "37",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "22",
        weight: "38",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "23",
        weight: "39",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "24",
        weight: "40",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "25",
        weight: "41",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "26",
        weight: "42",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "27",
        weight: "43",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "28",
        weight: "44",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "29",
        weight: "45",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "30",
        weight: "46",
        real: true,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "31",
        weight: "47",
        real: false,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "32",
        weight: "48",
        real: false,
        decay: "B-"
      },
      {
        protons: "16",
        neutrons: "33",
        weight: "49",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "17",
        neutrons: "11",
        weight: "28",
        real: true,
        decay: "p"
      },
      {
        protons: "17",
        neutrons: "12",
        weight: "29",
        real: true,
        decay: "p"
      },
      {
        protons: "17",
        neutrons: "13",
        weight: "30",
        real: true,
        decay: "p"
      },
      {
        protons: "17",
        neutrons: "14",
        weight: "31",
        real: true,
        decay: "B+"
      },
      {
        protons: "17",
        neutrons: "15",
        weight: "32",
        real: true,
        decay: "B+"
      },
      {
        protons: "17",
        neutrons: "16",
        weight: "33",
        real: true,
        decay: "B+"
      },
      {
        protons: "17",
        neutrons: "17",
        weight: "34",
        real: true,
        decay: "B+"
      },
      {
        protons: "17",
        neutrons: "18",
        weight: "35",
        real: true,
        decay: "IS"
      },
      {
        protons: "17",
        neutrons: "19",
        weight: "36",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "20",
        weight: "37",
        real: true,
        decay: "IS"
      },
      {
        protons: "17",
        neutrons: "21",
        weight: "38",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "22",
        weight: "39",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "23",
        weight: "40",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "24",
        weight: "41",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "25",
        weight: "42",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "26",
        weight: "43",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "27",
        weight: "44",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "28",
        weight: "45",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "29",
        weight: "46",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "30",
        weight: "47",
        real: true,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "31",
        weight: "48",
        real: false,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "32",
        weight: "49",
        real: false,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "33",
        weight: "50",
        real: false,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "34",
        weight: "51",
        real: false,
        decay: "B-"
      },
      {
        protons: "17",
        neutrons: "35",
        weight: "52",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "18",
        neutrons: "11",
        weight: "29",
        real: true,
        decay: "2p"
      },
      {
        protons: "18",
        neutrons: "12",
        weight: "30",
        real: true,
        decay: "2p"
      },
      {
        protons: "18",
        neutrons: "13",
        weight: "31",
        real: true,
        decay: "B+"
      },
      {
        protons: "18",
        neutrons: "14",
        weight: "32",
        real: true,
        decay: "B+"
      },
      {
        protons: "18",
        neutrons: "15",
        weight: "33",
        real: true,
        decay: "B+"
      },
      {
        protons: "18",
        neutrons: "16",
        weight: "34",
        real: true,
        decay: "B+"
      },
      {
        protons: "18",
        neutrons: "17",
        weight: "35",
        real: true,
        decay: "B+"
      },
      {
        protons: "18",
        neutrons: "18",
        weight: "36",
        real: true,
        decay: "IS"
      },
      {
        protons: "18",
        neutrons: "19",
        weight: "37",
        real: true,
        decay: "EC"
      },
      {
        protons: "18",
        neutrons: "20",
        weight: "38",
        real: true,
        decay: "IS"
      },
      {
        protons: "18",
        neutrons: "21",
        weight: "39",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "22",
        weight: "40",
        real: true,
        decay: "IS"
      },
      {
        protons: "18",
        neutrons: "23",
        weight: "41",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "24",
        weight: "42",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "25",
        weight: "43",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "26",
        weight: "44",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "27",
        weight: "45",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "28",
        weight: "46",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "29",
        weight: "47",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "30",
        weight: "48",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "31",
        weight: "49",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "32",
        weight: "50",
        real: true,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "33",
        weight: "51",
        real: false,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "34",
        weight: "52",
        real: false,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "35",
        weight: "53",
        real: false,
        decay: "B-"
      },
      {
        protons: "18",
        neutrons: "36",
        weight: "54",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "19",
        neutrons: "12",
        weight: "31",
        real: true,
        decay: "3p"
      },
      {
        protons: "19",
        neutrons: "13",
        weight: "32",
        real: false,
        decay: "p"
      },
      {
        protons: "19",
        neutrons: "14",
        weight: "33",
        real: false,
        decay: "p"
      },
      {
        protons: "19",
        neutrons: "15",
        weight: "34",
        real: false,
        decay: "p"
      },
      {
        protons: "19",
        neutrons: "16",
        weight: "35",
        real: true,
        decay: "B+"
      },
      {
        protons: "19",
        neutrons: "17",
        weight: "36",
        real: true,
        decay: "B+"
      },
      {
        protons: "19",
        neutrons: "18",
        weight: "37",
        real: true,
        decay: "B+"
      },
      {
        protons: "19",
        neutrons: "19",
        weight: "38",
        real: true,
        decay: "B+"
      },
      {
        protons: "19",
        neutrons: "20",
        weight: "39",
        real: true,
        decay: "IS"
      },
      {
        protons: "19",
        neutrons: "21",
        weight: "40",
        real: true,
        decay: "IS"
      },
      {
        protons: "19",
        neutrons: "22",
        weight: "41",
        real: true,
        decay: "IS"
      },
      {
        protons: "19",
        neutrons: "23",
        weight: "42",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "24",
        weight: "43",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "25",
        weight: "44",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "26",
        weight: "45",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "27",
        weight: "46",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "28",
        weight: "47",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "29",
        weight: "48",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "30",
        weight: "49",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "31",
        weight: "50",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "32",
        weight: "51",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "33",
        weight: "52",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "34",
        weight: "53",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "35",
        weight: "54",
        real: true,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "36",
        weight: "55",
        real: false,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "37",
        weight: "56",
        real: false,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "38",
        weight: "57",
        real: false,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "39",
        weight: "58",
        real: false,
        decay: "B-"
      },
      {
        protons: "19",
        neutrons: "40",
        weight: "59",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "20",
        neutrons: "13",
        weight: "33",
        real: false,
        decay: "p"
      },
      {
        protons: "20",
        neutrons: "14",
        weight: "34",
        real: false,
        decay: "2p"
      },
      {
        protons: "20",
        neutrons: "15",
        weight: "35",
        real: true,
        decay: "B+"
      },
      {
        protons: "20",
        neutrons: "16",
        weight: "36",
        real: true,
        decay: "B+"
      },
      {
        protons: "20",
        neutrons: "17",
        weight: "37",
        real: true,
        decay: "B+"
      },
      {
        protons: "20",
        neutrons: "18",
        weight: "38",
        real: true,
        decay: "B+"
      },
      {
        protons: "20",
        neutrons: "19",
        weight: "39",
        real: true,
        decay: "B+"
      },
      {
        protons: "20",
        neutrons: "20",
        weight: "40",
        real: true,
        decay: "IS"
      },
      {
        protons: "20",
        neutrons: "21",
        weight: "41",
        real: true,
        decay: "EC"
      },
      {
        protons: "20",
        neutrons: "22",
        weight: "42",
        real: true,
        decay: "IS"
      },
      {
        protons: "20",
        neutrons: "23",
        weight: "43",
        real: true,
        decay: "IS"
      },
      {
        protons: "20",
        neutrons: "24",
        weight: "44",
        real: true,
        decay: "IS"
      },
      {
        protons: "20",
        neutrons: "25",
        weight: "45",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "26",
        weight: "46",
        real: true,
        decay: "IS"
      },
      {
        protons: "20",
        neutrons: "27",
        weight: "47",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "28",
        weight: "48",
        real: true,
        decay: "IS"
      },
      {
        protons: "20",
        neutrons: "29",
        weight: "49",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "30",
        weight: "50",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "31",
        weight: "51",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "32",
        weight: "52",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "33",
        weight: "53",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "34",
        weight: "54",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "35",
        weight: "55",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "36",
        weight: "56",
        real: true,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "37",
        weight: "57",
        real: false,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "38",
        weight: "58",
        real: false,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "39",
        weight: "59",
        real: false,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "40",
        weight: "60",
        real: false,
        decay: "B-"
      },
      {
        protons: "20",
        neutrons: "41",
        weight: "61",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "21",
        neutrons: "14",
        weight: "35",
        real: false,
        decay: "p"
      },
      {
        protons: "21",
        neutrons: "15",
        weight: "36",
        real: false,
        decay: "p"
      },
      {
        protons: "21",
        neutrons: "16",
        weight: "37",
        real: false,
        decay: "p"
      },
      {
        protons: "21",
        neutrons: "17",
        weight: "38",
        real: false,
        decay: "p"
      },
      {
        protons: "21",
        neutrons: "18",
        weight: "39",
        real: true,
        decay: "p"
      },
      {
        protons: "21",
        neutrons: "19",
        weight: "40",
        real: true,
        decay: "B+"
      },
      {
        protons: "21",
        neutrons: "20",
        weight: "41",
        real: true,
        decay: "B+"
      },
      {
        protons: "21",
        neutrons: "21",
        weight: "42",
        real: true,
        decay: "B+"
      },
      {
        protons: "21",
        neutrons: "22",
        weight: "43",
        real: true,
        decay: "B+"
      },
      {
        protons: "21",
        neutrons: "23",
        weight: "44",
        real: true,
        decay: "B+"
      },
      {
        protons: "21",
        neutrons: "24",
        weight: "45",
        real: true,
        decay: "IS"
      },
      {
        protons: "21",
        neutrons: "25",
        weight: "46",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "26",
        weight: "47",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "27",
        weight: "48",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "28",
        weight: "49",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "29",
        weight: "50",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "30",
        weight: "51",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "31",
        weight: "52",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "32",
        weight: "53",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "33",
        weight: "54",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "34",
        weight: "55",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "35",
        weight: "56",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "36",
        weight: "57",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "37",
        weight: "58",
        real: true,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "38",
        weight: "59",
        real: false,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "39",
        weight: "60",
        real: false,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "40",
        weight: "61",
        real: false,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "41",
        weight: "62",
        real: false,
        decay: "B-"
      },
      {
        protons: "21",
        neutrons: "42",
        weight: "63",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "22",
        neutrons: "15",
        weight: "37",
        real: false,
        decay: "p"
      },
      {
        protons: "22",
        neutrons: "16",
        weight: "38",
        real: false,
        decay: "2p"
      },
      {
        protons: "22",
        neutrons: "17",
        weight: "39",
        real: true,
        decay: "B+"
      },
      {
        protons: "22",
        neutrons: "18",
        weight: "40",
        real: true,
        decay: "B+"
      },
      {
        protons: "22",
        neutrons: "19",
        weight: "41",
        real: true,
        decay: "B+"
      },
      {
        protons: "22",
        neutrons: "20",
        weight: "42",
        real: true,
        decay: "B+"
      },
      {
        protons: "22",
        neutrons: "21",
        weight: "43",
        real: true,
        decay: "B+"
      },
      {
        protons: "22",
        neutrons: "22",
        weight: "44",
        real: true,
        decay: "EC"
      },
      {
        protons: "22",
        neutrons: "23",
        weight: "45",
        real: true,
        decay: "B+"
      },
      {
        protons: "22",
        neutrons: "24",
        weight: "46",
        real: true,
        decay: "IS"
      },
      {
        protons: "22",
        neutrons: "25",
        weight: "47",
        real: true,
        decay: "IS"
      },
      {
        protons: "22",
        neutrons: "26",
        weight: "48",
        real: true,
        decay: "IS"
      },
      {
        protons: "22",
        neutrons: "27",
        weight: "49",
        real: true,
        decay: "IS"
      },
      {
        protons: "22",
        neutrons: "28",
        weight: "50",
        real: true,
        decay: "IS"
      },
      {
        protons: "22",
        neutrons: "29",
        weight: "51",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "30",
        weight: "52",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "31",
        weight: "53",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "32",
        weight: "54",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "33",
        weight: "55",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "34",
        weight: "56",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "35",
        weight: "57",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "36",
        weight: "58",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "37",
        weight: "59",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "38",
        weight: "60",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "39",
        weight: "61",
        real: true,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "40",
        weight: "62",
        real: false,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "41",
        weight: "63",
        real: false,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "42",
        weight: "64",
        real: false,
        decay: "B-"
      },
      {
        protons: "22",
        neutrons: "43",
        weight: "65",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "23",
        neutrons: "16",
        weight: "39",
        real: false,
        decay: "p"
      },
      {
        protons: "23",
        neutrons: "17",
        weight: "40",
        real: false,
        decay: "p"
      },
      {
        protons: "23",
        neutrons: "18",
        weight: "41",
        real: false,
        decay: "p"
      },
      {
        protons: "23",
        neutrons: "19",
        weight: "42",
        real: false,
        decay: "p"
      },
      {
        protons: "23",
        neutrons: "20",
        weight: "43",
        real: true,
        decay: "B+"
      },
      {
        protons: "23",
        neutrons: "21",
        weight: "44",
        real: true,
        decay: "B+"
      },
      {
        protons: "23",
        neutrons: "22",
        weight: "45",
        real: true,
        decay: "B+"
      },
      {
        protons: "23",
        neutrons: "23",
        weight: "46",
        real: true,
        decay: "B+"
      },
      {
        protons: "23",
        neutrons: "24",
        weight: "47",
        real: true,
        decay: "B+"
      },
      {
        protons: "23",
        neutrons: "25",
        weight: "48",
        real: true,
        decay: "B+"
      },
      {
        protons: "23",
        neutrons: "26",
        weight: "49",
        real: true,
        decay: "EC"
      },
      {
        protons: "23",
        neutrons: "27",
        weight: "50",
        real: true,
        decay: "IS"
      },
      {
        protons: "23",
        neutrons: "28",
        weight: "51",
        real: true,
        decay: "IS"
      },
      {
        protons: "23",
        neutrons: "29",
        weight: "52",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "30",
        weight: "53",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "31",
        weight: "54",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "32",
        weight: "55",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "33",
        weight: "56",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "34",
        weight: "57",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "35",
        weight: "58",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "36",
        weight: "59",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "37",
        weight: "60",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "38",
        weight: "61",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "39",
        weight: "62",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "40",
        weight: "63",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "41",
        weight: "64",
        real: true,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "42",
        weight: "65",
        real: false,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "43",
        weight: "66",
        real: false,
        decay: "B-"
      },
      {
        protons: "23",
        neutrons: "44",
        weight: "67",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "24",
        neutrons: "17",
        weight: "41",
        real: false,
        decay: "p"
      },
      {
        protons: "24",
        neutrons: "18",
        weight: "42",
        real: true,
        decay: "B+"
      },
      {
        protons: "24",
        neutrons: "19",
        weight: "43",
        real: true,
        decay: "B+"
      },
      {
        protons: "24",
        neutrons: "20",
        weight: "44",
        real: true,
        decay: "B+"
      },
      {
        protons: "24",
        neutrons: "21",
        weight: "45",
        real: true,
        decay: "B+"
      },
      {
        protons: "24",
        neutrons: "22",
        weight: "46",
        real: true,
        decay: "B+"
      },
      {
        protons: "24",
        neutrons: "23",
        weight: "47",
        real: true,
        decay: "B+"
      },
      {
        protons: "24",
        neutrons: "24",
        weight: "48",
        real: true,
        decay: "B+"
      },
      {
        protons: "24",
        neutrons: "25",
        weight: "49",
        real: true,
        decay: "B+"
      },
      {
        protons: "24",
        neutrons: "26",
        weight: "50",
        real: true,
        decay: "IS"
      },
      {
        protons: "24",
        neutrons: "27",
        weight: "51",
        real: true,
        decay: "EC"
      },
      {
        protons: "24",
        neutrons: "28",
        weight: "52",
        real: true,
        decay: "IS"
      },
      {
        protons: "24",
        neutrons: "29",
        weight: "53",
        real: true,
        decay: "IS"
      },
      {
        protons: "24",
        neutrons: "30",
        weight: "54",
        real: true,
        decay: "IS"
      },
      {
        protons: "24",
        neutrons: "31",
        weight: "55",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "32",
        weight: "56",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "33",
        weight: "57",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "34",
        weight: "58",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "35",
        weight: "59",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "36",
        weight: "60",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "37",
        weight: "61",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "38",
        weight: "62",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "39",
        weight: "63",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "40",
        weight: "64",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "41",
        weight: "65",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "42",
        weight: "66",
        real: true,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "43",
        weight: "67",
        real: false,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "44",
        weight: "68",
        real: false,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "45",
        weight: "69",
        real: false,
        decay: "B-"
      },
      {
        protons: "24",
        neutrons: "46",
        weight: "70",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "25",
        neutrons: "18",
        weight: "43",
        real: false,
        decay: "p"
      },
      {
        protons: "25",
        neutrons: "19",
        weight: "44",
        real: false,
        decay: "p"
      },
      {
        protons: "25",
        neutrons: "20",
        weight: "45",
        real: false,
        decay: "p"
      },
      {
        protons: "25",
        neutrons: "21",
        weight: "46",
        real: true,
        decay: "B+"
      },
      {
        protons: "25",
        neutrons: "22",
        weight: "47",
        real: true,
        decay: "B+"
      },
      {
        protons: "25",
        neutrons: "23",
        weight: "48",
        real: true,
        decay: "B+"
      },
      {
        protons: "25",
        neutrons: "24",
        weight: "49",
        real: true,
        decay: "B+"
      },
      {
        protons: "25",
        neutrons: "25",
        weight: "50",
        real: true,
        decay: "B+"
      },
      {
        protons: "25",
        neutrons: "26",
        weight: "51",
        real: true,
        decay: "B+"
      },
      {
        protons: "25",
        neutrons: "27",
        weight: "52",
        real: true,
        decay: "B+"
      },
      {
        protons: "25",
        neutrons: "28",
        weight: "53",
        real: true,
        decay: "EC"
      },
      {
        protons: "25",
        neutrons: "29",
        weight: "54",
        real: true,
        decay: "EC"
      },
      {
        protons: "25",
        neutrons: "30",
        weight: "55",
        real: true,
        decay: "IS"
      },
      {
        protons: "25",
        neutrons: "31",
        weight: "56",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "32",
        weight: "57",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "33",
        weight: "58",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "34",
        weight: "59",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "35",
        weight: "60",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "36",
        weight: "61",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "37",
        weight: "62",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "38",
        weight: "63",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "39",
        weight: "64",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "40",
        weight: "65",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "41",
        weight: "66",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "42",
        weight: "67",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "43",
        weight: "68",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "44",
        weight: "69",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "45",
        weight: "70",
        real: true,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "46",
        weight: "71",
        real: false,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "47",
        weight: "72",
        real: false,
        decay: "B-"
      },
      {
        protons: "25",
        neutrons: "48",
        weight: "73",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "26",
        neutrons: "19",
        weight: "45",
        real: true,
        decay: "2p"
      },
      {
        protons: "26",
        neutrons: "20",
        weight: "46",
        real: true,
        decay: "B+"
      },
      {
        protons: "26",
        neutrons: "21",
        weight: "47",
        real: true,
        decay: "B+"
      },
      {
        protons: "26",
        neutrons: "22",
        weight: "48",
        real: true,
        decay: "B+"
      },
      {
        protons: "26",
        neutrons: "23",
        weight: "49",
        real: true,
        decay: "B+"
      },
      {
        protons: "26",
        neutrons: "24",
        weight: "50",
        real: true,
        decay: "B+"
      },
      {
        protons: "26",
        neutrons: "25",
        weight: "51",
        real: true,
        decay: "B+"
      },
      {
        protons: "26",
        neutrons: "26",
        weight: "52",
        real: true,
        decay: "B+"
      },
      {
        protons: "26",
        neutrons: "27",
        weight: "53",
        real: true,
        decay: "B+"
      },
      {
        protons: "26",
        neutrons: "28",
        weight: "54",
        real: true,
        decay: "IS"
      },
      {
        protons: "26",
        neutrons: "29",
        weight: "55",
        real: true,
        decay: "EC"
      },
      {
        protons: "26",
        neutrons: "30",
        weight: "56",
        real: true,
        decay: "IS"
      },
      {
        protons: "26",
        neutrons: "31",
        weight: "57",
        real: true,
        decay: "IS"
      },
      {
        protons: "26",
        neutrons: "32",
        weight: "58",
        real: true,
        decay: "IS"
      },
      {
        protons: "26",
        neutrons: "33",
        weight: "59",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "34",
        weight: "60",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "35",
        weight: "61",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "36",
        weight: "62",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "37",
        weight: "63",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "38",
        weight: "64",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "39",
        weight: "65",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "40",
        weight: "66",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "41",
        weight: "67",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "42",
        weight: "68",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "43",
        weight: "69",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "44",
        weight: "70",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "45",
        weight: "71",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "46",
        weight: "72",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "47",
        weight: "73",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "48",
        weight: "74",
        real: true,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "49",
        weight: "75",
        real: false,
        decay: "B-"
      },
      {
        protons: "26",
        neutrons: "50",
        weight: "76",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "27",
        neutrons: "20",
        weight: "47",
        real: false,
        decay: "p"
      },
      {
        protons: "27",
        neutrons: "21",
        weight: "48",
        real: false,
        decay: "p"
      },
      {
        protons: "27",
        neutrons: "22",
        weight: "49",
        real: false,
        decay: "p"
      },
      {
        protons: "27",
        neutrons: "23",
        weight: "50",
        real: true,
        decay: "B+"
      },
      {
        protons: "27",
        neutrons: "24",
        weight: "51",
        real: true,
        decay: "B+"
      },
      {
        protons: "27",
        neutrons: "25",
        weight: "52",
        real: true,
        decay: "B+"
      },
      {
        protons: "27",
        neutrons: "26",
        weight: "53",
        real: true,
        decay: "B+"
      },
      {
        protons: "27",
        neutrons: "27",
        weight: "54",
        real: true,
        decay: "B+"
      },
      {
        protons: "27",
        neutrons: "28",
        weight: "55",
        real: true,
        decay: "B+"
      },
      {
        protons: "27",
        neutrons: "29",
        weight: "56",
        real: true,
        decay: "B+"
      },
      {
        protons: "27",
        neutrons: "30",
        weight: "57",
        real: true,
        decay: "EC"
      },
      {
        protons: "27",
        neutrons: "31",
        weight: "58",
        real: true,
        decay: "B+"
      },
      {
        protons: "27",
        neutrons: "32",
        weight: "59",
        real: true,
        decay: "IS"
      },
      {
        protons: "27",
        neutrons: "33",
        weight: "60",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "34",
        weight: "61",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "35",
        weight: "62",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "36",
        weight: "63",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "37",
        weight: "64",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "38",
        weight: "65",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "39",
        weight: "66",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "40",
        weight: "67",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "41",
        weight: "68",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "42",
        weight: "69",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "43",
        weight: "70",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "44",
        weight: "71",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "45",
        weight: "72",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "46",
        weight: "73",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "47",
        weight: "74",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "48",
        weight: "75",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "49",
        weight: "76",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "50",
        weight: "77",
        real: true,
        decay: "B-"
      },
      {
        protons: "27",
        neutrons: "51",
        weight: "78",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "28",
        neutrons: "20",
        weight: "48",
        real: true,
        decay: "2p"
      },
      {
        protons: "28",
        neutrons: "21",
        weight: "49",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "22",
        weight: "50",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "23",
        weight: "51",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "24",
        weight: "52",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "25",
        weight: "53",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "26",
        weight: "54",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "27",
        weight: "55",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "28",
        weight: "56",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "29",
        weight: "57",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "30",
        weight: "58",
        real: true,
        decay: "IS"
      },
      {
        protons: "28",
        neutrons: "31",
        weight: "59",
        real: true,
        decay: "B+"
      },
      {
        protons: "28",
        neutrons: "32",
        weight: "60",
        real: true,
        decay: "IS"
      },
      {
        protons: "28",
        neutrons: "33",
        weight: "61",
        real: true,
        decay: "IS"
      },
      {
        protons: "28",
        neutrons: "34",
        weight: "62",
        real: true,
        decay: "IS"
      },
      {
        protons: "28",
        neutrons: "35",
        weight: "63",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "36",
        weight: "64",
        real: true,
        decay: "IS"
      },
      {
        protons: "28",
        neutrons: "37",
        weight: "65",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "38",
        weight: "66",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "39",
        weight: "67",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "40",
        weight: "68",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "41",
        weight: "69",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "42",
        weight: "70",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "43",
        weight: "71",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "44",
        weight: "72",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "45",
        weight: "73",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "46",
        weight: "74",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "47",
        weight: "75",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "48",
        weight: "76",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "49",
        weight: "77",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "50",
        weight: "78",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "51",
        weight: "79",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "52",
        weight: "80",
        real: true,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "53",
        weight: "81",
        real: false,
        decay: "B-"
      },
      {
        protons: "28",
        neutrons: "54",
        weight: "82",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "29",
        neutrons: "23",
        weight: "52",
        real: false,
        decay: "p"
      },
      {
        protons: "29",
        neutrons: "24",
        weight: "53",
        real: false,
        decay: "p"
      },
      {
        protons: "29",
        neutrons: "25",
        weight: "54",
        real: false,
        decay: "p"
      },
      {
        protons: "29",
        neutrons: "26",
        weight: "55",
        real: true,
        decay: "B+"
      },
      {
        protons: "29",
        neutrons: "27",
        weight: "56",
        real: true,
        decay: "B+"
      },
      {
        protons: "29",
        neutrons: "28",
        weight: "57",
        real: true,
        decay: "B+"
      },
      {
        protons: "29",
        neutrons: "29",
        weight: "58",
        real: true,
        decay: "B+"
      },
      {
        protons: "29",
        neutrons: "30",
        weight: "59",
        real: true,
        decay: "B+"
      },
      {
        protons: "29",
        neutrons: "31",
        weight: "60",
        real: true,
        decay: "B+"
      },
      {
        protons: "29",
        neutrons: "32",
        weight: "61",
        real: true,
        decay: "B+"
      },
      {
        protons: "29",
        neutrons: "33",
        weight: "62",
        real: true,
        decay: "B+"
      },
      {
        protons: "29",
        neutrons: "34",
        weight: "63",
        real: true,
        decay: "IS"
      },
      {
        protons: "29",
        neutrons: "35",
        weight: "64",
        real: true,
        decay: "B+"
      },
      {
        protons: "29",
        neutrons: "36",
        weight: "65",
        real: true,
        decay: "IS"
      },
      {
        protons: "29",
        neutrons: "37",
        weight: "66",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "38",
        weight: "67",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "39",
        weight: "68",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "40",
        weight: "69",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "41",
        weight: "70",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "42",
        weight: "71",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "43",
        weight: "72",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "44",
        weight: "73",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "45",
        weight: "74",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "46",
        weight: "75",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "47",
        weight: "76",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "48",
        weight: "77",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "49",
        weight: "78",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "50",
        weight: "79",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "51",
        weight: "80",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "52",
        weight: "81",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "53",
        weight: "82",
        real: true,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "54",
        weight: "83",
        real: false,
        decay: "B-"
      },
      {
        protons: "29",
        neutrons: "55",
        weight: "84",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "30",
        neutrons: "24",
        weight: "54",
        real: true,
        decay: "2p"
      },
      {
        protons: "30",
        neutrons: "25",
        weight: "55",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "26",
        weight: "56",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "27",
        weight: "57",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "28",
        weight: "58",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "29",
        weight: "59",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "30",
        weight: "60",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "31",
        weight: "61",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "32",
        weight: "62",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "33",
        weight: "63",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "34",
        weight: "64",
        real: true,
        decay: "IS"
      },
      {
        protons: "30",
        neutrons: "35",
        weight: "65",
        real: true,
        decay: "B+"
      },
      {
        protons: "30",
        neutrons: "36",
        weight: "66",
        real: true,
        decay: "IS"
      },
      {
        protons: "30",
        neutrons: "37",
        weight: "67",
        real: true,
        decay: "IS"
      },
      {
        protons: "30",
        neutrons: "38",
        weight: "68",
        real: true,
        decay: "IS"
      },
      {
        protons: "30",
        neutrons: "39",
        weight: "69",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "40",
        weight: "70",
        real: true,
        decay: "IS"
      },
      {
        protons: "30",
        neutrons: "41",
        weight: "71",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "42",
        weight: "72",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "43",
        weight: "73",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "44",
        weight: "74",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "45",
        weight: "75",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "46",
        weight: "76",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "47",
        weight: "77",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "48",
        weight: "78",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "49",
        weight: "79",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "50",
        weight: "80",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "51",
        weight: "81",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "52",
        weight: "82",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "53",
        weight: "83",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "54",
        weight: "84",
        real: true,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "55",
        weight: "85",
        real: false,
        decay: "B-"
      },
      {
        protons: "30",
        neutrons: "56",
        weight: "86",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "31",
        neutrons: "25",
        weight: "56",
        real: false,
        decay: "p"
      },
      {
        protons: "31",
        neutrons: "26",
        weight: "57",
        real: false,
        decay: "p"
      },
      {
        protons: "31",
        neutrons: "27",
        weight: "58",
        real: false,
        decay: "p"
      },
      {
        protons: "31",
        neutrons: "28",
        weight: "59",
        real: false,
        decay: "p"
      },
      {
        protons: "31",
        neutrons: "29",
        weight: "60",
        real: true,
        decay: "B+"
      },
      {
        protons: "31",
        neutrons: "30",
        weight: "61",
        real: true,
        decay: "B+"
      },
      {
        protons: "31",
        neutrons: "31",
        weight: "62",
        real: true,
        decay: "B+"
      },
      {
        protons: "31",
        neutrons: "32",
        weight: "63",
        real: true,
        decay: "B+"
      },
      {
        protons: "31",
        neutrons: "33",
        weight: "64",
        real: true,
        decay: "B+"
      },
      {
        protons: "31",
        neutrons: "34",
        weight: "65",
        real: true,
        decay: "B+"
      },
      {
        protons: "31",
        neutrons: "35",
        weight: "66",
        real: true,
        decay: "B+"
      },
      {
        protons: "31",
        neutrons: "36",
        weight: "67",
        real: true,
        decay: "EC"
      },
      {
        protons: "31",
        neutrons: "37",
        weight: "68",
        real: true,
        decay: "B+"
      },
      {
        protons: "31",
        neutrons: "38",
        weight: "69",
        real: true,
        decay: "IS"
      },
      {
        protons: "31",
        neutrons: "39",
        weight: "70",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "40",
        weight: "71",
        real: true,
        decay: "IS"
      },
      {
        protons: "31",
        neutrons: "41",
        weight: "72",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "42",
        weight: "73",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "43",
        weight: "74",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "44",
        weight: "75",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "45",
        weight: "76",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "46",
        weight: "77",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "47",
        weight: "78",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "48",
        weight: "79",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "49",
        weight: "80",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "50",
        weight: "81",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "51",
        weight: "82",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "52",
        weight: "83",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "53",
        weight: "84",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "54",
        weight: "85",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "55",
        weight: "86",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "56",
        weight: "87",
        real: true,
        decay: "B-"
      },
      {
        protons: "31",
        neutrons: "57",
        weight: "88",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "32",
        neutrons: "26",
        weight: "58",
        real: false,
        decay: "2p"
      },
      {
        protons: "32",
        neutrons: "27",
        weight: "59",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "28",
        weight: "60",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "29",
        weight: "61",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "30",
        weight: "62",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "31",
        weight: "63",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "32",
        weight: "64",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "33",
        weight: "65",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "34",
        weight: "66",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "35",
        weight: "67",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "36",
        weight: "68",
        real: true,
        decay: "EC"
      },
      {
        protons: "32",
        neutrons: "37",
        weight: "69",
        real: true,
        decay: "B+"
      },
      {
        protons: "32",
        neutrons: "38",
        weight: "70",
        real: true,
        decay: "IS"
      },
      {
        protons: "32",
        neutrons: "39",
        weight: "71",
        real: true,
        decay: "EC"
      },
      {
        protons: "32",
        neutrons: "40",
        weight: "72",
        real: true,
        decay: "IS"
      },
      {
        protons: "32",
        neutrons: "41",
        weight: "73",
        real: true,
        decay: "IS"
      },
      {
        protons: "32",
        neutrons: "42",
        weight: "74",
        real: true,
        decay: "IS"
      },
      {
        protons: "32",
        neutrons: "43",
        weight: "75",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "44",
        weight: "76",
        real: true,
        decay: "IS"
      },
      {
        protons: "32",
        neutrons: "45",
        weight: "77",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "46",
        weight: "78",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "47",
        weight: "79",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "48",
        weight: "80",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "49",
        weight: "81",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "50",
        weight: "82",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "51",
        weight: "83",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "52",
        weight: "84",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "53",
        weight: "85",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "54",
        weight: "86",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "55",
        weight: "87",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "56",
        weight: "88",
        real: true,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "57",
        weight: "89",
        real: false,
        decay: "B-"
      },
      {
        protons: "32",
        neutrons: "58",
        weight: "90",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "33",
        neutrons: "27",
        weight: "60",
        real: false,
        decay: "p"
      },
      {
        protons: "33",
        neutrons: "28",
        weight: "61",
        real: false,
        decay: "p"
      },
      {
        protons: "33",
        neutrons: "29",
        weight: "62",
        real: false,
        decay: "p"
      },
      {
        protons: "33",
        neutrons: "30",
        weight: "63",
        real: false,
        decay: "p"
      },
      {
        protons: "33",
        neutrons: "31",
        weight: "64",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "32",
        weight: "65",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "33",
        weight: "66",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "34",
        weight: "67",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "35",
        weight: "68",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "36",
        weight: "69",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "37",
        weight: "70",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "38",
        weight: "71",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "39",
        weight: "72",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "40",
        weight: "73",
        real: true,
        decay: "EC"
      },
      {
        protons: "33",
        neutrons: "41",
        weight: "74",
        real: true,
        decay: "B+"
      },
      {
        protons: "33",
        neutrons: "42",
        weight: "75",
        real: true,
        decay: "IS"
      },
      {
        protons: "33",
        neutrons: "43",
        weight: "76",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "44",
        weight: "77",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "45",
        weight: "78",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "46",
        weight: "79",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "47",
        weight: "80",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "48",
        weight: "81",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "49",
        weight: "82",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "50",
        weight: "83",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "51",
        weight: "84",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "52",
        weight: "85",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "53",
        weight: "86",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "54",
        weight: "87",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "55",
        weight: "88",
        real: true,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "56",
        weight: "89",
        real: false,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "57",
        weight: "90",
        real: false,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "58",
        weight: "91",
        real: false,
        decay: "B-"
      },
      {
        protons: "33",
        neutrons: "59",
        weight: "92",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "34",
        neutrons: "29",
        weight: "63",
        real: true,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "30",
        weight: "64",
        real: false,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "31",
        weight: "65",
        real: true,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "32",
        weight: "66",
        real: true,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "33",
        weight: "67",
        real: true,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "34",
        weight: "68",
        real: true,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "35",
        weight: "69",
        real: true,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "36",
        weight: "70",
        real: true,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "37",
        weight: "71",
        real: true,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "38",
        weight: "72",
        real: true,
        decay: "EC"
      },
      {
        protons: "34",
        neutrons: "39",
        weight: "73",
        real: true,
        decay: "B+"
      },
      {
        protons: "34",
        neutrons: "40",
        weight: "74",
        real: true,
        decay: "IS"
      },
      {
        protons: "34",
        neutrons: "41",
        weight: "75",
        real: true,
        decay: "EC"
      },
      {
        protons: "34",
        neutrons: "42",
        weight: "76",
        real: true,
        decay: "IS"
      },
      {
        protons: "34",
        neutrons: "43",
        weight: "77",
        real: true,
        decay: "IS"
      },
      {
        protons: "34",
        neutrons: "44",
        weight: "78",
        real: true,
        decay: "IS"
      },
      {
        protons: "34",
        neutrons: "45",
        weight: "79",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "46",
        weight: "80",
        real: true,
        decay: "IS"
      },
      {
        protons: "34",
        neutrons: "47",
        weight: "81",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "48",
        weight: "82",
        real: true,
        decay: "IS"
      },
      {
        protons: "34",
        neutrons: "49",
        weight: "83",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "50",
        weight: "84",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "51",
        weight: "85",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "52",
        weight: "86",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "53",
        weight: "87",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "54",
        weight: "88",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "55",
        weight: "89",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "56",
        weight: "90",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "57",
        weight: "91",
        real: true,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "58",
        weight: "92",
        real: false,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "59",
        weight: "93",
        real: false,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "60",
        weight: "94",
        real: false,
        decay: "B-"
      },
      {
        protons: "34",
        neutrons: "61",
        weight: "95",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "35",
        neutrons: "30",
        weight: "65",
        real: false,
        decay: "p"
      },
      {
        protons: "35",
        neutrons: "31",
        weight: "66",
        real: false,
        decay: "p"
      },
      {
        protons: "35",
        neutrons: "32",
        weight: "67",
        real: false,
        decay: "p"
      },
      {
        protons: "35",
        neutrons: "33",
        weight: "68",
        real: false,
        decay: "p"
      },
      {
        protons: "35",
        neutrons: "34",
        weight: "69",
        real: true,
        decay: "p"
      },
      {
        protons: "35",
        neutrons: "35",
        weight: "70",
        real: true,
        decay: "B+"
      },
      {
        protons: "35",
        neutrons: "36",
        weight: "71",
        real: true,
        decay: "B+"
      },
      {
        protons: "35",
        neutrons: "37",
        weight: "72",
        real: true,
        decay: "B+"
      },
      {
        protons: "35",
        neutrons: "38",
        weight: "73",
        real: true,
        decay: "B+"
      },
      {
        protons: "35",
        neutrons: "39",
        weight: "74",
        real: true,
        decay: "B+"
      },
      {
        protons: "35",
        neutrons: "40",
        weight: "75",
        real: true,
        decay: "B+"
      },
      {
        protons: "35",
        neutrons: "41",
        weight: "76",
        real: true,
        decay: "B+"
      },
      {
        protons: "35",
        neutrons: "42",
        weight: "77",
        real: true,
        decay: "B+"
      },
      {
        protons: "35",
        neutrons: "43",
        weight: "78",
        real: true,
        decay: "B+"
      },
      {
        protons: "35",
        neutrons: "44",
        weight: "79",
        real: true,
        decay: "IS"
      },
      {
        protons: "35",
        neutrons: "45",
        weight: "80",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "46",
        weight: "81",
        real: true,
        decay: "IS"
      },
      {
        protons: "35",
        neutrons: "47",
        weight: "82",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "48",
        weight: "83",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "49",
        weight: "84",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "50",
        weight: "85",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "51",
        weight: "86",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "52",
        weight: "87",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "53",
        weight: "88",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "54",
        weight: "89",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "55",
        weight: "90",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "56",
        weight: "91",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "57",
        weight: "92",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "58",
        weight: "93",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "59",
        weight: "94",
        real: true,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "60",
        weight: "95",
        real: false,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "61",
        weight: "96",
        real: false,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "62",
        weight: "97",
        real: false,
        decay: "B-"
      },
      {
        protons: "35",
        neutrons: "63",
        weight: "98",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "36",
        neutrons: "31",
        weight: "67",
        real: true,
        decay: "2p"
      },
      {
        protons: "36",
        neutrons: "32",
        weight: "68",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "33",
        weight: "69",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "34",
        weight: "70",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "35",
        weight: "71",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "36",
        weight: "72",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "37",
        weight: "73",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "38",
        weight: "74",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "39",
        weight: "75",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "40",
        weight: "76",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "41",
        weight: "77",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "42",
        weight: "78",
        real: true,
        decay: "IS"
      },
      {
        protons: "36",
        neutrons: "43",
        weight: "79",
        real: true,
        decay: "B+"
      },
      {
        protons: "36",
        neutrons: "44",
        weight: "80",
        real: true,
        decay: "IS"
      },
      {
        protons: "36",
        neutrons: "45",
        weight: "81",
        real: true,
        decay: "EC"
      },
      {
        protons: "36",
        neutrons: "46",
        weight: "82",
        real: true,
        decay: "IS"
      },
      {
        protons: "36",
        neutrons: "47",
        weight: "83",
        real: true,
        decay: "IS"
      },
      {
        protons: "36",
        neutrons: "48",
        weight: "84",
        real: true,
        decay: "IS"
      },
      {
        protons: "36",
        neutrons: "49",
        weight: "85",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "50",
        weight: "86",
        real: true,
        decay: "IS"
      },
      {
        protons: "36",
        neutrons: "51",
        weight: "87",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "52",
        weight: "88",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "53",
        weight: "89",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "54",
        weight: "90",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "55",
        weight: "91",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "56",
        weight: "92",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "57",
        weight: "93",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "58",
        weight: "94",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "59",
        weight: "95",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "60",
        weight: "96",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "61",
        weight: "97",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "62",
        weight: "98",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "63",
        weight: "99",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "64",
        weight: "100",
        real: true,
        decay: "B-"
      },
      {
        protons: "36",
        neutrons: "65",
        weight: "101",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "37",
        neutrons: "34",
        weight: "71",
        real: false,
        decay: "p"
      },
      {
        protons: "37",
        neutrons: "35",
        weight: "72",
        real: false,
        decay: "p"
      },
      {
        protons: "37",
        neutrons: "36",
        weight: "73",
        real: false,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "37",
        weight: "74",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "38",
        weight: "75",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "39",
        weight: "76",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "40",
        weight: "77",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "41",
        weight: "78",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "42",
        weight: "79",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "43",
        weight: "80",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "44",
        weight: "81",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "45",
        weight: "82",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "46",
        weight: "83",
        real: true,
        decay: "EC"
      },
      {
        protons: "37",
        neutrons: "47",
        weight: "84",
        real: true,
        decay: "B+"
      },
      {
        protons: "37",
        neutrons: "48",
        weight: "85",
        real: true,
        decay: "IS"
      },
      {
        protons: "37",
        neutrons: "49",
        weight: "86",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "50",
        weight: "87",
        real: true,
        decay: "IS"
      },
      {
        protons: "37",
        neutrons: "51",
        weight: "88",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "52",
        weight: "89",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "53",
        weight: "90",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "54",
        weight: "91",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "55",
        weight: "92",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "56",
        weight: "93",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "57",
        weight: "94",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "58",
        weight: "95",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "59",
        weight: "96",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "60",
        weight: "97",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "61",
        weight: "98",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "62",
        weight: "99",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "63",
        weight: "100",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "64",
        weight: "101",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "65",
        weight: "102",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "66",
        weight: "103",
        real: true,
        decay: "B-"
      },
      {
        protons: "37",
        neutrons: "67",
        weight: "104",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "38",
        neutrons: "35",
        weight: "73",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "36",
        weight: "74",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "37",
        weight: "75",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "38",
        weight: "76",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "39",
        weight: "77",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "40",
        weight: "78",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "41",
        weight: "79",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "42",
        weight: "80",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "43",
        weight: "81",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "44",
        weight: "82",
        real: true,
        decay: "EC"
      },
      {
        protons: "38",
        neutrons: "45",
        weight: "83",
        real: true,
        decay: "B+"
      },
      {
        protons: "38",
        neutrons: "46",
        weight: "84",
        real: true,
        decay: "IS"
      },
      {
        protons: "38",
        neutrons: "47",
        weight: "85",
        real: true,
        decay: "EC"
      },
      {
        protons: "38",
        neutrons: "48",
        weight: "86",
        real: true,
        decay: "IS"
      },
      {
        protons: "38",
        neutrons: "49",
        weight: "87",
        real: true,
        decay: "IS"
      },
      {
        protons: "38",
        neutrons: "50",
        weight: "88",
        real: true,
        decay: "IS"
      },
      {
        protons: "38",
        neutrons: "51",
        weight: "89",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "52",
        weight: "90",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "53",
        weight: "91",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "54",
        weight: "92",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "55",
        weight: "93",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "56",
        weight: "94",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "57",
        weight: "95",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "58",
        weight: "96",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "59",
        weight: "97",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "60",
        weight: "98",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "61",
        weight: "99",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "62",
        weight: "100",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "63",
        weight: "101",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "64",
        weight: "102",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "65",
        weight: "103",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "66",
        weight: "104",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "67",
        weight: "105",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "68",
        weight: "106",
        real: true,
        decay: "B-"
      },
      {
        protons: "38",
        neutrons: "69",
        weight: "107",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "39",
        neutrons: "36",
        weight: "75",
        real: false,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "37",
        weight: "76",
        real: false,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "38",
        weight: "77",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "39",
        weight: "78",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "40",
        weight: "79",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "41",
        weight: "80",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "42",
        weight: "81",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "43",
        weight: "82",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "44",
        weight: "83",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "45",
        weight: "84",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "46",
        weight: "85",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "47",
        weight: "86",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "48",
        weight: "87",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "49",
        weight: "88",
        real: true,
        decay: "B+"
      },
      {
        protons: "39",
        neutrons: "50",
        weight: "89",
        real: true,
        decay: "IS"
      },
      {
        protons: "39",
        neutrons: "51",
        weight: "90",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "52",
        weight: "91",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "53",
        weight: "92",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "54",
        weight: "93",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "55",
        weight: "94",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "56",
        weight: "95",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "57",
        weight: "96",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "58",
        weight: "97",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "59",
        weight: "98",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "60",
        weight: "99",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "61",
        weight: "100",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "62",
        weight: "101",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "63",
        weight: "102",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "64",
        weight: "103",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "65",
        weight: "104",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "66",
        weight: "105",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "67",
        weight: "106",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "68",
        weight: "107",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "69",
        weight: "108",
        real: true,
        decay: "B-"
      },
      {
        protons: "39",
        neutrons: "70",
        weight: "109",
        real: true,
        decay: "B-"
      }
    ],
    [
      {
        protons: "40",
        neutrons: "37",
        weight: "77",
        real: false,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "38",
        weight: "78",
        real: false,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "39",
        weight: "79",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "40",
        weight: "80",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "41",
        weight: "81",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "42",
        weight: "82",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "43",
        weight: "83",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "44",
        weight: "84",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "45",
        weight: "85",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "46",
        weight: "86",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "47",
        weight: "87",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "48",
        weight: "88",
        real: true,
        decay: "EC"
      },
      {
        protons: "40",
        neutrons: "49",
        weight: "89",
        real: true,
        decay: "B+"
      },
      {
        protons: "40",
        neutrons: "50",
        weight: "90",
        real: true,
        decay: "IS"
      },
      {
        protons: "40",
        neutrons: "51",
        weight: "91",
        real: true,
        decay: "IS"
      },
      {
        protons: "40",
        neutrons: "52",
        weight: "92",
        real: true,
        decay: "IS"
      },
      {
        protons: "40",
        neutrons: "53",
        weight: "93",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "54",
        weight: "94",
        real: true,
        decay: "IS"
      },
      {
        protons: "40",
        neutrons: "55",
        weight: "95",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "56",
        weight: "96",
        real: true,
        decay: "IS"
      },
      {
        protons: "40",
        neutrons: "57",
        weight: "97",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "58",
        weight: "98",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "59",
        weight: "99",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "60",
        weight: "100",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "61",
        weight: "101",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "62",
        weight: "102",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "63",
        weight: "103",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "64",
        weight: "104",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "65",
        weight: "105",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "66",
        weight: "106",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "67",
        weight: "107",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "68",
        weight: "108",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "69",
        weight: "109",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "70",
        weight: "110",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "71",
        weight: "111",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "72",
        weight: "112",
        real: true,
        decay: "B-"
      },
      {
        protons: "40",
        neutrons: "73",
        weight: "113",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "41",
        neutrons: "38",
        weight: "79",
        real: false,
        decay: "p"
      },
      {
        protons: "41",
        neutrons: "39",
        weight: "80",
        real: false,
        decay: "p"
      },
      {
        protons: "41",
        neutrons: "40",
        weight: "81",
        real: false,
        decay: "p"
      },
      {
        protons: "41",
        neutrons: "41",
        weight: "82",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "42",
        weight: "83",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "43",
        weight: "84",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "44",
        weight: "85",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "45",
        weight: "86",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "46",
        weight: "87",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "47",
        weight: "88",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "48",
        weight: "89",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "49",
        weight: "90",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "50",
        weight: "91",
        real: true,
        decay: "EC"
      },
      {
        protons: "41",
        neutrons: "51",
        weight: "92",
        real: true,
        decay: "B+"
      },
      {
        protons: "41",
        neutrons: "52",
        weight: "93",
        real: true,
        decay: "IS"
      },
      {
        protons: "41",
        neutrons: "53",
        weight: "94",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "54",
        weight: "95",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "55",
        weight: "96",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "56",
        weight: "97",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "57",
        weight: "98",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "58",
        weight: "99",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "59",
        weight: "100",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "60",
        weight: "101",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "61",
        weight: "102",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "62",
        weight: "103",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "63",
        weight: "104",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "64",
        weight: "105",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "65",
        weight: "106",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "66",
        weight: "107",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "67",
        weight: "108",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "68",
        weight: "109",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "69",
        weight: "110",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "70",
        weight: "111",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "71",
        weight: "112",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "72",
        weight: "113",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "73",
        weight: "114",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "74",
        weight: "115",
        real: true,
        decay: "B-"
      },
      {
        protons: "41",
        neutrons: "75",
        weight: "116",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "42",
        neutrons: "39",
        weight: "81",
        real: false,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "40",
        weight: "82",
        real: false,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "41",
        weight: "83",
        real: true,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "42",
        weight: "84",
        real: true,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "43",
        weight: "85",
        real: true,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "44",
        weight: "86",
        real: true,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "45",
        weight: "87",
        real: true,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "46",
        weight: "88",
        real: true,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "47",
        weight: "89",
        real: true,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "48",
        weight: "90",
        real: true,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "49",
        weight: "91",
        real: true,
        decay: "B+"
      },
      {
        protons: "42",
        neutrons: "50",
        weight: "92",
        real: true,
        decay: "IS"
      },
      {
        protons: "42",
        neutrons: "51",
        weight: "93",
        real: true,
        decay: "EC"
      },
      {
        protons: "42",
        neutrons: "52",
        weight: "94",
        real: true,
        decay: "IS"
      },
      {
        protons: "42",
        neutrons: "53",
        weight: "95",
        real: true,
        decay: "IS"
      },
      {
        protons: "42",
        neutrons: "54",
        weight: "96",
        real: true,
        decay: "IS"
      },
      {
        protons: "42",
        neutrons: "55",
        weight: "97",
        real: true,
        decay: "IS"
      },
      {
        protons: "42",
        neutrons: "56",
        weight: "98",
        real: true,
        decay: "IS"
      },
      {
        protons: "42",
        neutrons: "57",
        weight: "99",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "58",
        weight: "100",
        real: true,
        decay: "IS"
      },
      {
        protons: "42",
        neutrons: "59",
        weight: "101",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "60",
        weight: "102",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "61",
        weight: "103",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "62",
        weight: "104",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "63",
        weight: "105",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "64",
        weight: "106",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "65",
        weight: "107",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "66",
        weight: "108",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "67",
        weight: "109",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "68",
        weight: "110",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "69",
        weight: "111",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "70",
        weight: "112",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "71",
        weight: "113",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "72",
        weight: "114",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "73",
        weight: "115",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "74",
        weight: "116",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "75",
        weight: "117",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "76",
        weight: "118",
        real: true,
        decay: "B-"
      },
      {
        protons: "42",
        neutrons: "77",
        weight: "119",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "43",
        neutrons: "40",
        weight: "83",
        real: false,
        decay: "p"
      },
      {
        protons: "43",
        neutrons: "41",
        weight: "84",
        real: false,
        decay: "p"
      },
      {
        protons: "43",
        neutrons: "42",
        weight: "85",
        real: false,
        decay: "p"
      },
      {
        protons: "43",
        neutrons: "43",
        weight: "86",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "44",
        weight: "87",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "45",
        weight: "88",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "46",
        weight: "89",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "47",
        weight: "90",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "48",
        weight: "91",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "49",
        weight: "92",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "50",
        weight: "93",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "51",
        weight: "94",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "52",
        weight: "95",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "53",
        weight: "96",
        real: true,
        decay: "B+"
      },
      {
        protons: "43",
        neutrons: "54",
        weight: "97",
        real: true,
        decay: "EC"
      },
      {
        protons: "43",
        neutrons: "55",
        weight: "98",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "56",
        weight: "99",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "57",
        weight: "100",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "58",
        weight: "101",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "59",
        weight: "102",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "60",
        weight: "103",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "61",
        weight: "104",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "62",
        weight: "105",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "63",
        weight: "106",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "64",
        weight: "107",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "65",
        weight: "108",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "66",
        weight: "109",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "67",
        weight: "110",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "68",
        weight: "111",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "69",
        weight: "112",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "70",
        weight: "113",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "71",
        weight: "114",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "72",
        weight: "115",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "73",
        weight: "116",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "74",
        weight: "117",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "75",
        weight: "118",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "76",
        weight: "119",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "77",
        weight: "120",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "78",
        weight: "121",
        real: true,
        decay: "B-"
      },
      {
        protons: "43",
        neutrons: "79",
        weight: "122",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "44",
        neutrons: "41",
        weight: "85",
        real: false,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "42",
        weight: "86",
        real: false,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "43",
        weight: "87",
        real: false,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "44",
        weight: "88",
        real: true,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "45",
        weight: "89",
        real: true,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "46",
        weight: "90",
        real: true,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "47",
        weight: "91",
        real: true,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "48",
        weight: "92",
        real: true,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "49",
        weight: "93",
        real: true,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "50",
        weight: "94",
        real: true,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "51",
        weight: "95",
        real: true,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "52",
        weight: "96",
        real: true,
        decay: "IS"
      },
      {
        protons: "44",
        neutrons: "53",
        weight: "97",
        real: true,
        decay: "B+"
      },
      {
        protons: "44",
        neutrons: "54",
        weight: "98",
        real: true,
        decay: "IS"
      },
      {
        protons: "44",
        neutrons: "55",
        weight: "99",
        real: true,
        decay: "IS"
      },
      {
        protons: "44",
        neutrons: "56",
        weight: "100",
        real: true,
        decay: "IS"
      },
      {
        protons: "44",
        neutrons: "57",
        weight: "101",
        real: true,
        decay: "IS"
      },
      {
        protons: "44",
        neutrons: "58",
        weight: "102",
        real: true,
        decay: "IS"
      },
      {
        protons: "44",
        neutrons: "59",
        weight: "103",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "60",
        weight: "104",
        real: true,
        decay: "IS"
      },
      {
        protons: "44",
        neutrons: "61",
        weight: "105",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "62",
        weight: "106",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "63",
        weight: "107",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "64",
        weight: "108",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "65",
        weight: "109",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "66",
        weight: "110",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "67",
        weight: "111",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "68",
        weight: "112",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "69",
        weight: "113",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "70",
        weight: "114",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "71",
        weight: "115",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "72",
        weight: "116",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "73",
        weight: "117",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "74",
        weight: "118",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "75",
        weight: "119",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "76",
        weight: "120",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "77",
        weight: "121",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "78",
        weight: "122",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "79",
        weight: "123",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "80",
        weight: "124",
        real: true,
        decay: "B-"
      },
      {
        protons: "44",
        neutrons: "81",
        weight: "125",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "45",
        neutrons: "43",
        weight: "88",
        real: false,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "44",
        weight: "89",
        real: false,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "45",
        weight: "90",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "46",
        weight: "91",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "47",
        weight: "92",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "48",
        weight: "93",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "49",
        weight: "94",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "50",
        weight: "95",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "51",
        weight: "96",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "52",
        weight: "97",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "53",
        weight: "98",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "54",
        weight: "99",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "55",
        weight: "100",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "56",
        weight: "101",
        real: true,
        decay: "EC"
      },
      {
        protons: "45",
        neutrons: "57",
        weight: "102",
        real: true,
        decay: "B+"
      },
      {
        protons: "45",
        neutrons: "58",
        weight: "103",
        real: true,
        decay: "IS"
      },
      {
        protons: "45",
        neutrons: "59",
        weight: "104",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "60",
        weight: "105",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "61",
        weight: "106",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "62",
        weight: "107",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "63",
        weight: "108",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "64",
        weight: "109",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "65",
        weight: "110",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "66",
        weight: "111",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "67",
        weight: "112",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "68",
        weight: "113",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "69",
        weight: "114",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "70",
        weight: "115",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "71",
        weight: "116",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "72",
        weight: "117",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "73",
        weight: "118",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "74",
        weight: "119",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "75",
        weight: "120",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "76",
        weight: "121",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "77",
        weight: "122",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "78",
        weight: "123",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "79",
        weight: "124",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "80",
        weight: "125",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "81",
        weight: "126",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "82",
        weight: "127",
        real: true,
        decay: "B-"
      },
      {
        protons: "45",
        neutrons: "83",
        weight: "128",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "46",
        neutrons: "44",
        weight: "90",
        real: false,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "45",
        weight: "91",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "46",
        weight: "92",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "47",
        weight: "93",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "48",
        weight: "94",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "49",
        weight: "95",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "50",
        weight: "96",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "51",
        weight: "97",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "52",
        weight: "98",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "53",
        weight: "99",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "54",
        weight: "100",
        real: true,
        decay: "EC"
      },
      {
        protons: "46",
        neutrons: "55",
        weight: "101",
        real: true,
        decay: "B+"
      },
      {
        protons: "46",
        neutrons: "56",
        weight: "102",
        real: true,
        decay: "IS"
      },
      {
        protons: "46",
        neutrons: "57",
        weight: "103",
        real: true,
        decay: "EC"
      },
      {
        protons: "46",
        neutrons: "58",
        weight: "104",
        real: true,
        decay: "IS"
      },
      {
        protons: "46",
        neutrons: "59",
        weight: "105",
        real: true,
        decay: "IS"
      },
      {
        protons: "46",
        neutrons: "60",
        weight: "106",
        real: true,
        decay: "IS"
      },
      {
        protons: "46",
        neutrons: "61",
        weight: "107",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "62",
        weight: "108",
        real: true,
        decay: "IS"
      },
      {
        protons: "46",
        neutrons: "63",
        weight: "109",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "64",
        weight: "110",
        real: true,
        decay: "IS"
      },
      {
        protons: "46",
        neutrons: "65",
        weight: "111",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "66",
        weight: "112",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "67",
        weight: "113",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "68",
        weight: "114",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "69",
        weight: "115",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "70",
        weight: "116",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "71",
        weight: "117",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "72",
        weight: "118",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "73",
        weight: "119",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "74",
        weight: "120",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "75",
        weight: "121",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "76",
        weight: "122",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "77",
        weight: "123",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "78",
        weight: "124",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "79",
        weight: "125",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "80",
        weight: "126",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "81",
        weight: "127",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "82",
        weight: "128",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "83",
        weight: "129",
        real: true,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "84",
        weight: "130",
        real: false,
        decay: "B-"
      },
      {
        protons: "46",
        neutrons: "85",
        weight: "131",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "47",
        neutrons: "45",
        weight: "92",
        real: false,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "46",
        weight: "93",
        real: true,
        decay: "p"
      },
      {
        protons: "47",
        neutrons: "47",
        weight: "94",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "48",
        weight: "95",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "49",
        weight: "96",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "50",
        weight: "97",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "51",
        weight: "98",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "52",
        weight: "99",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "53",
        weight: "100",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "54",
        weight: "101",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "55",
        weight: "102",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "56",
        weight: "103",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "57",
        weight: "104",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "58",
        weight: "105",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "59",
        weight: "106",
        real: true,
        decay: "B+"
      },
      {
        protons: "47",
        neutrons: "60",
        weight: "107",
        real: true,
        decay: "IS"
      },
      {
        protons: "47",
        neutrons: "61",
        weight: "108",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "62",
        weight: "109",
        real: true,
        decay: "IS"
      },
      {
        protons: "47",
        neutrons: "63",
        weight: "110",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "64",
        weight: "111",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "65",
        weight: "112",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "66",
        weight: "113",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "67",
        weight: "114",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "68",
        weight: "115",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "69",
        weight: "116",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "70",
        weight: "117",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "71",
        weight: "118",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "72",
        weight: "119",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "73",
        weight: "120",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "74",
        weight: "121",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "75",
        weight: "122",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "76",
        weight: "123",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "77",
        weight: "124",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "78",
        weight: "125",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "79",
        weight: "126",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "80",
        weight: "127",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "81",
        weight: "128",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "82",
        weight: "129",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "83",
        weight: "130",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "84",
        weight: "131",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "85",
        weight: "132",
        real: true,
        decay: "B-"
      },
      {
        protons: "47",
        neutrons: "86",
        weight: "133",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "48",
        neutrons: "46",
        weight: "94",
        real: false,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "47",
        weight: "95",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "48",
        weight: "96",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "49",
        weight: "97",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "50",
        weight: "98",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "51",
        weight: "99",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "52",
        weight: "100",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "53",
        weight: "101",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "54",
        weight: "102",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "55",
        weight: "103",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "56",
        weight: "104",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "57",
        weight: "105",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "58",
        weight: "106",
        real: true,
        decay: "IS"
      },
      {
        protons: "48",
        neutrons: "59",
        weight: "107",
        real: true,
        decay: "B+"
      },
      {
        protons: "48",
        neutrons: "60",
        weight: "108",
        real: true,
        decay: "IS"
      },
      {
        protons: "48",
        neutrons: "61",
        weight: "109",
        real: true,
        decay: "EC"
      },
      {
        protons: "48",
        neutrons: "62",
        weight: "110",
        real: true,
        decay: "IS"
      },
      {
        protons: "48",
        neutrons: "63",
        weight: "111",
        real: true,
        decay: "IS"
      },
      {
        protons: "48",
        neutrons: "64",
        weight: "112",
        real: true,
        decay: "IS"
      },
      {
        protons: "48",
        neutrons: "65",
        weight: "113",
        real: true,
        decay: "IS"
      },
      {
        protons: "48",
        neutrons: "66",
        weight: "114",
        real: true,
        decay: "IS"
      },
      {
        protons: "48",
        neutrons: "67",
        weight: "115",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "68",
        weight: "116",
        real: true,
        decay: "IS"
      },
      {
        protons: "48",
        neutrons: "69",
        weight: "117",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "70",
        weight: "118",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "71",
        weight: "119",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "72",
        weight: "120",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "73",
        weight: "121",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "74",
        weight: "122",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "75",
        weight: "123",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "76",
        weight: "124",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "77",
        weight: "125",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "78",
        weight: "126",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "79",
        weight: "127",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "80",
        weight: "128",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "81",
        weight: "129",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "82",
        weight: "130",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "83",
        weight: "131",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "84",
        weight: "132",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "85",
        weight: "133",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "86",
        weight: "134",
        real: true,
        decay: "B-"
      },
      {
        protons: "48",
        neutrons: "87",
        weight: "135",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "49",
        neutrons: "47",
        weight: "96",
        real: false,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "48",
        weight: "97",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "49",
        weight: "98",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "50",
        weight: "99",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "51",
        weight: "100",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "52",
        weight: "101",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "53",
        weight: "102",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "54",
        weight: "103",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "55",
        weight: "104",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "56",
        weight: "105",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "57",
        weight: "106",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "58",
        weight: "107",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "59",
        weight: "108",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "60",
        weight: "109",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "61",
        weight: "110",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "62",
        weight: "111",
        real: true,
        decay: "EC"
      },
      {
        protons: "49",
        neutrons: "63",
        weight: "112",
        real: true,
        decay: "B+"
      },
      {
        protons: "49",
        neutrons: "64",
        weight: "113",
        real: true,
        decay: "IS"
      },
      {
        protons: "49",
        neutrons: "65",
        weight: "114",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "66",
        weight: "115",
        real: true,
        decay: "IS"
      },
      {
        protons: "49",
        neutrons: "67",
        weight: "116",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "68",
        weight: "117",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "69",
        weight: "118",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "70",
        weight: "119",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "71",
        weight: "120",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "72",
        weight: "121",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "73",
        weight: "122",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "74",
        weight: "123",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "75",
        weight: "124",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "76",
        weight: "125",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "77",
        weight: "126",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "78",
        weight: "127",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "79",
        weight: "128",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "80",
        weight: "129",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "81",
        weight: "130",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "82",
        weight: "131",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "83",
        weight: "132",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "84",
        weight: "133",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "85",
        weight: "134",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "86",
        weight: "135",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "87",
        weight: "136",
        real: true,
        decay: "B-"
      },
      {
        protons: "49",
        neutrons: "88",
        weight: "137",
        real: true,
        decay: "B-"
      }
    ],
    [
      {
        protons: "50",
        neutrons: "49",
        weight: "99",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "50",
        weight: "100",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "51",
        weight: "101",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "52",
        weight: "102",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "53",
        weight: "103",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "54",
        weight: "104",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "55",
        weight: "105",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "56",
        weight: "106",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "57",
        weight: "107",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "58",
        weight: "108",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "59",
        weight: "109",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "60",
        weight: "110",
        real: true,
        decay: "EC"
      },
      {
        protons: "50",
        neutrons: "61",
        weight: "111",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "62",
        weight: "112",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "63",
        weight: "113",
        real: true,
        decay: "B+"
      },
      {
        protons: "50",
        neutrons: "64",
        weight: "114",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "65",
        weight: "115",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "66",
        weight: "116",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "67",
        weight: "117",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "68",
        weight: "118",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "69",
        weight: "119",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "70",
        weight: "120",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "71",
        weight: "121",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "72",
        weight: "122",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "73",
        weight: "123",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "74",
        weight: "124",
        real: true,
        decay: "IS"
      },
      {
        protons: "50",
        neutrons: "75",
        weight: "125",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "76",
        weight: "126",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "77",
        weight: "127",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "78",
        weight: "128",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "79",
        weight: "129",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "80",
        weight: "130",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "81",
        weight: "131",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "82",
        weight: "132",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "83",
        weight: "133",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "84",
        weight: "134",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "85",
        weight: "135",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "86",
        weight: "136",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "87",
        weight: "137",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "88",
        weight: "138",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "89",
        weight: "139",
        real: true,
        decay: "B-"
      },
      {
        protons: "50",
        neutrons: "90",
        weight: "140",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "51",
        neutrons: "51",
        weight: "102",
        real: false,
        decay: "p"
      },
      {
        protons: "51",
        neutrons: "52",
        weight: "103",
        real: false,
        decay: "p"
      },
      {
        protons: "51",
        neutrons: "53",
        weight: "104",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "54",
        weight: "105",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "55",
        weight: "106",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "56",
        weight: "107",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "57",
        weight: "108",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "58",
        weight: "109",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "59",
        weight: "110",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "60",
        weight: "111",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "61",
        weight: "112",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "62",
        weight: "113",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "63",
        weight: "114",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "64",
        weight: "115",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "65",
        weight: "116",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "66",
        weight: "117",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "67",
        weight: "118",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "68",
        weight: "119",
        real: true,
        decay: "EC"
      },
      {
        protons: "51",
        neutrons: "69",
        weight: "120",
        real: true,
        decay: "B+"
      },
      {
        protons: "51",
        neutrons: "70",
        weight: "121",
        real: true,
        decay: "IS"
      },
      {
        protons: "51",
        neutrons: "71",
        weight: "122",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "72",
        weight: "123",
        real: true,
        decay: "IS"
      },
      {
        protons: "51",
        neutrons: "73",
        weight: "124",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "74",
        weight: "125",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "75",
        weight: "126",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "76",
        weight: "127",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "77",
        weight: "128",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "78",
        weight: "129",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "79",
        weight: "130",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "80",
        weight: "131",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "81",
        weight: "132",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "82",
        weight: "133",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "83",
        weight: "134",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "84",
        weight: "135",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "85",
        weight: "136",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "86",
        weight: "137",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "87",
        weight: "138",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "88",
        weight: "139",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "89",
        weight: "140",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "90",
        weight: "141",
        real: true,
        decay: "B-"
      },
      {
        protons: "51",
        neutrons: "91",
        weight: "142",
        real: true,
        decay: "B-"
      }
    ],
    [
      {
        protons: "52",
        neutrons: "52",
        weight: "104",
        real: true,
        decay: "A"
      },
      {
        protons: "52",
        neutrons: "53",
        weight: "105",
        real: true,
        decay: "A"
      },
      {
        protons: "52",
        neutrons: "54",
        weight: "106",
        real: true,
        decay: "A"
      },
      {
        protons: "52",
        neutrons: "55",
        weight: "107",
        real: true,
        decay: "A"
      },
      {
        protons: "52",
        neutrons: "56",
        weight: "108",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "57",
        weight: "109",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "58",
        weight: "110",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "59",
        weight: "111",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "60",
        weight: "112",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "61",
        weight: "113",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "62",
        weight: "114",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "63",
        weight: "115",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "64",
        weight: "116",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "65",
        weight: "117",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "66",
        weight: "118",
        real: true,
        decay: "EC"
      },
      {
        protons: "52",
        neutrons: "67",
        weight: "119",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "68",
        weight: "120",
        real: true,
        decay: "IS"
      },
      {
        protons: "52",
        neutrons: "69",
        weight: "121",
        real: true,
        decay: "B+"
      },
      {
        protons: "52",
        neutrons: "70",
        weight: "122",
        real: true,
        decay: "IS"
      },
      {
        protons: "52",
        neutrons: "71",
        weight: "123",
        real: true,
        decay: "IS"
      },
      {
        protons: "52",
        neutrons: "72",
        weight: "124",
        real: true,
        decay: "IS"
      },
      {
        protons: "52",
        neutrons: "73",
        weight: "125",
        real: true,
        decay: "IS"
      },
      {
        protons: "52",
        neutrons: "74",
        weight: "126",
        real: true,
        decay: "IS"
      },
      {
        protons: "52",
        neutrons: "75",
        weight: "127",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "76",
        weight: "128",
        real: true,
        decay: "IS"
      },
      {
        protons: "52",
        neutrons: "77",
        weight: "129",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "78",
        weight: "130",
        real: true,
        decay: "IS"
      },
      {
        protons: "52",
        neutrons: "79",
        weight: "131",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "80",
        weight: "132",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "81",
        weight: "133",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "82",
        weight: "134",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "83",
        weight: "135",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "84",
        weight: "136",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "85",
        weight: "137",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "86",
        weight: "138",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "87",
        weight: "139",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "88",
        weight: "140",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "89",
        weight: "141",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "90",
        weight: "142",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "91",
        weight: "143",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "92",
        weight: "144",
        real: true,
        decay: "B-"
      },
      {
        protons: "52",
        neutrons: "93",
        weight: "145",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "53",
        neutrons: "53",
        weight: "106",
        real: false,
        decay: "A"
      },
      {
        protons: "53",
        neutrons: "54",
        weight: "107",
        real: false,
        decay: "A"
      },
      {
        protons: "53",
        neutrons: "55",
        weight: "108",
        real: true,
        decay: "A"
      },
      {
        protons: "53",
        neutrons: "56",
        weight: "109",
        real: true,
        decay: "p"
      },
      {
        protons: "53",
        neutrons: "57",
        weight: "110",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "58",
        weight: "111",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "59",
        weight: "112",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "60",
        weight: "113",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "61",
        weight: "114",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "62",
        weight: "115",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "63",
        weight: "116",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "64",
        weight: "117",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "65",
        weight: "118",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "66",
        weight: "119",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "67",
        weight: "120",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "68",
        weight: "121",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "69",
        weight: "122",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "70",
        weight: "123",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "71",
        weight: "124",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "72",
        weight: "125",
        real: true,
        decay: "EC"
      },
      {
        protons: "53",
        neutrons: "73",
        weight: "126",
        real: true,
        decay: "B+"
      },
      {
        protons: "53",
        neutrons: "74",
        weight: "127",
        real: true,
        decay: "IS"
      },
      {
        protons: "53",
        neutrons: "75",
        weight: "128",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "76",
        weight: "129",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "77",
        weight: "130",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "78",
        weight: "131",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "79",
        weight: "132",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "80",
        weight: "133",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "81",
        weight: "134",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "82",
        weight: "135",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "83",
        weight: "136",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "84",
        weight: "137",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "85",
        weight: "138",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "86",
        weight: "139",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "87",
        weight: "140",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "88",
        weight: "141",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "89",
        weight: "142",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "90",
        weight: "143",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "91",
        weight: "144",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "92",
        weight: "145",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "93",
        weight: "146",
        real: true,
        decay: "B-"
      },
      {
        protons: "53",
        neutrons: "94",
        weight: "147",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "54",
        neutrons: "54",
        weight: "108",
        real: true,
        decay: "A"
      },
      {
        protons: "54",
        neutrons: "55",
        weight: "109",
        real: true,
        decay: "A"
      },
      {
        protons: "54",
        neutrons: "56",
        weight: "110",
        real: true,
        decay: "A"
      },
      {
        protons: "54",
        neutrons: "57",
        weight: "111",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "58",
        weight: "112",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "59",
        weight: "113",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "60",
        weight: "114",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "61",
        weight: "115",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "62",
        weight: "116",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "63",
        weight: "117",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "64",
        weight: "118",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "65",
        weight: "119",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "66",
        weight: "120",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "67",
        weight: "121",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "68",
        weight: "122",
        real: true,
        decay: "EC"
      },
      {
        protons: "54",
        neutrons: "69",
        weight: "123",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "70",
        weight: "124",
        real: true,
        decay: "IS"
      },
      {
        protons: "54",
        neutrons: "71",
        weight: "125",
        real: true,
        decay: "B+"
      },
      {
        protons: "54",
        neutrons: "72",
        weight: "126",
        real: true,
        decay: "IS"
      },
      {
        protons: "54",
        neutrons: "73",
        weight: "127",
        real: true,
        decay: "EC"
      },
      {
        protons: "54",
        neutrons: "74",
        weight: "128",
        real: true,
        decay: "IS"
      },
      {
        protons: "54",
        neutrons: "75",
        weight: "129",
        real: true,
        decay: "IS"
      },
      {
        protons: "54",
        neutrons: "76",
        weight: "130",
        real: true,
        decay: "IS"
      },
      {
        protons: "54",
        neutrons: "77",
        weight: "131",
        real: true,
        decay: "IS"
      },
      {
        protons: "54",
        neutrons: "78",
        weight: "132",
        real: true,
        decay: "IS"
      },
      {
        protons: "54",
        neutrons: "79",
        weight: "133",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "80",
        weight: "134",
        real: true,
        decay: "IS"
      },
      {
        protons: "54",
        neutrons: "81",
        weight: "135",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "82",
        weight: "136",
        real: true,
        decay: "IS"
      },
      {
        protons: "54",
        neutrons: "83",
        weight: "137",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "84",
        weight: "138",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "85",
        weight: "139",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "86",
        weight: "140",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "87",
        weight: "141",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "88",
        weight: "142",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "89",
        weight: "143",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "90",
        weight: "144",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "91",
        weight: "145",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "92",
        weight: "146",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "93",
        weight: "147",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "94",
        weight: "148",
        real: true,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "95",
        weight: "149",
        real: false,
        decay: "B-"
      },
      {
        protons: "54",
        neutrons: "96",
        weight: "150",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "55",
        neutrons: "56",
        weight: "111",
        real: false,
        decay: "p"
      },
      {
        protons: "55",
        neutrons: "57",
        weight: "112",
        real: true,
        decay: "p"
      },
      {
        protons: "55",
        neutrons: "58",
        weight: "113",
        real: true,
        decay: "p"
      },
      {
        protons: "55",
        neutrons: "59",
        weight: "114",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "60",
        weight: "115",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "61",
        weight: "116",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "62",
        weight: "117",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "63",
        weight: "118",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "64",
        weight: "119",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "65",
        weight: "120",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "66",
        weight: "121",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "67",
        weight: "122",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "68",
        weight: "123",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "69",
        weight: "124",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "70",
        weight: "125",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "71",
        weight: "126",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "72",
        weight: "127",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "73",
        weight: "128",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "74",
        weight: "129",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "75",
        weight: "130",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "76",
        weight: "131",
        real: true,
        decay: "EC"
      },
      {
        protons: "55",
        neutrons: "77",
        weight: "132",
        real: true,
        decay: "B+"
      },
      {
        protons: "55",
        neutrons: "78",
        weight: "133",
        real: true,
        decay: "IS"
      },
      {
        protons: "55",
        neutrons: "79",
        weight: "134",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "80",
        weight: "135",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "81",
        weight: "136",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "82",
        weight: "137",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "83",
        weight: "138",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "84",
        weight: "139",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "85",
        weight: "140",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "86",
        weight: "141",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "87",
        weight: "142",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "88",
        weight: "143",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "89",
        weight: "144",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "90",
        weight: "145",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "91",
        weight: "146",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "92",
        weight: "147",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "93",
        weight: "148",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "94",
        weight: "149",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "95",
        weight: "150",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "96",
        weight: "151",
        real: true,
        decay: "B-"
      },
      {
        protons: "55",
        neutrons: "97",
        weight: "152",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "56",
        neutrons: "57",
        weight: "113",
        real: false,
        decay: "p"
      },
      {
        protons: "56",
        neutrons: "58",
        weight: "114",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "59",
        weight: "115",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "60",
        weight: "116",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "61",
        weight: "117",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "62",
        weight: "118",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "63",
        weight: "119",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "64",
        weight: "120",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "65",
        weight: "121",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "66",
        weight: "122",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "67",
        weight: "123",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "68",
        weight: "124",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "69",
        weight: "125",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "70",
        weight: "126",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "71",
        weight: "127",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "72",
        weight: "128",
        real: true,
        decay: "EC"
      },
      {
        protons: "56",
        neutrons: "73",
        weight: "129",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "74",
        weight: "130",
        real: true,
        decay: "IS"
      },
      {
        protons: "56",
        neutrons: "75",
        weight: "131",
        real: true,
        decay: "B+"
      },
      {
        protons: "56",
        neutrons: "76",
        weight: "132",
        real: true,
        decay: "IS"
      },
      {
        protons: "56",
        neutrons: "77",
        weight: "133",
        real: true,
        decay: "EC"
      },
      {
        protons: "56",
        neutrons: "78",
        weight: "134",
        real: true,
        decay: "IS"
      },
      {
        protons: "56",
        neutrons: "79",
        weight: "135",
        real: true,
        decay: "IS"
      },
      {
        protons: "56",
        neutrons: "80",
        weight: "136",
        real: true,
        decay: "IS"
      },
      {
        protons: "56",
        neutrons: "81",
        weight: "137",
        real: true,
        decay: "IS"
      },
      {
        protons: "56",
        neutrons: "82",
        weight: "138",
        real: true,
        decay: "IS"
      },
      {
        protons: "56",
        neutrons: "83",
        weight: "139",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "84",
        weight: "140",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "85",
        weight: "141",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "86",
        weight: "142",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "87",
        weight: "143",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "88",
        weight: "144",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "89",
        weight: "145",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "90",
        weight: "146",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "91",
        weight: "147",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "92",
        weight: "148",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "93",
        weight: "149",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "94",
        weight: "150",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "95",
        weight: "151",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "96",
        weight: "152",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "97",
        weight: "153",
        real: true,
        decay: "B-"
      },
      {
        protons: "56",
        neutrons: "98",
        weight: "154",
        real: true,
        decay: "B-"
      }
    ],
    [
      {
        protons: "57",
        neutrons: "59",
        weight: "116",
        real: false,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "60",
        weight: "117",
        real: true,
        decay: "p"
      },
      {
        protons: "57",
        neutrons: "61",
        weight: "118",
        real: false,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "62",
        weight: "119",
        real: false,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "63",
        weight: "120",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "64",
        weight: "121",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "65",
        weight: "122",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "66",
        weight: "123",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "67",
        weight: "124",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "68",
        weight: "125",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "69",
        weight: "126",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "70",
        weight: "127",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "71",
        weight: "128",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "72",
        weight: "129",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "73",
        weight: "130",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "74",
        weight: "131",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "75",
        weight: "132",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "76",
        weight: "133",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "77",
        weight: "134",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "78",
        weight: "135",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "79",
        weight: "136",
        real: true,
        decay: "B+"
      },
      {
        protons: "57",
        neutrons: "80",
        weight: "137",
        real: true,
        decay: "EC"
      },
      {
        protons: "57",
        neutrons: "81",
        weight: "138",
        real: true,
        decay: "IS"
      },
      {
        protons: "57",
        neutrons: "82",
        weight: "139",
        real: true,
        decay: "IS"
      },
      {
        protons: "57",
        neutrons: "83",
        weight: "140",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "84",
        weight: "141",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "85",
        weight: "142",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "86",
        weight: "143",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "87",
        weight: "144",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "88",
        weight: "145",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "89",
        weight: "146",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "90",
        weight: "147",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "91",
        weight: "148",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "92",
        weight: "149",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "93",
        weight: "150",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "94",
        weight: "151",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "95",
        weight: "152",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "96",
        weight: "153",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "97",
        weight: "154",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "98",
        weight: "155",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "99",
        weight: "156",
        real: true,
        decay: "B-"
      },
      {
        protons: "57",
        neutrons: "100",
        weight: "157",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "58",
        neutrons: "61",
        weight: "119",
        real: false,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "62",
        weight: "120",
        real: false,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "63",
        weight: "121",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "64",
        weight: "122",
        real: false,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "65",
        weight: "123",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "66",
        weight: "124",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "67",
        weight: "125",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "68",
        weight: "126",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "69",
        weight: "127",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "70",
        weight: "128",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "71",
        weight: "129",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "72",
        weight: "130",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "73",
        weight: "131",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "74",
        weight: "132",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "75",
        weight: "133",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "76",
        weight: "134",
        real: true,
        decay: "EC"
      },
      {
        protons: "58",
        neutrons: "77",
        weight: "135",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "78",
        weight: "136",
        real: true,
        decay: "IS"
      },
      {
        protons: "58",
        neutrons: "79",
        weight: "137",
        real: true,
        decay: "B+"
      },
      {
        protons: "58",
        neutrons: "80",
        weight: "138",
        real: true,
        decay: "IS"
      },
      {
        protons: "58",
        neutrons: "81",
        weight: "139",
        real: true,
        decay: "EC"
      },
      {
        protons: "58",
        neutrons: "82",
        weight: "140",
        real: true,
        decay: "IS"
      },
      {
        protons: "58",
        neutrons: "83",
        weight: "141",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "84",
        weight: "142",
        real: true,
        decay: "IS"
      },
      {
        protons: "58",
        neutrons: "85",
        weight: "143",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "86",
        weight: "144",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "87",
        weight: "145",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "88",
        weight: "146",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "89",
        weight: "147",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "90",
        weight: "148",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "91",
        weight: "149",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "92",
        weight: "150",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "93",
        weight: "151",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "94",
        weight: "152",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "95",
        weight: "153",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "96",
        weight: "154",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "97",
        weight: "155",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "98",
        weight: "156",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "99",
        weight: "157",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "100",
        weight: "158",
        real: true,
        decay: "B-"
      },
      {
        protons: "58",
        neutrons: "101",
        weight: "159",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "59",
        neutrons: "62",
        weight: "121",
        real: true,
        decay: "p"
      },
      {
        protons: "59",
        neutrons: "63",
        weight: "122",
        real: false,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "64",
        weight: "123",
        real: false,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "65",
        weight: "124",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "66",
        weight: "125",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "67",
        weight: "126",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "68",
        weight: "127",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "69",
        weight: "128",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "70",
        weight: "129",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "71",
        weight: "130",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "72",
        weight: "131",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "73",
        weight: "132",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "74",
        weight: "133",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "75",
        weight: "134",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "76",
        weight: "135",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "77",
        weight: "136",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "78",
        weight: "137",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "79",
        weight: "138",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "80",
        weight: "139",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "81",
        weight: "140",
        real: true,
        decay: "B+"
      },
      {
        protons: "59",
        neutrons: "82",
        weight: "141",
        real: true,
        decay: "IS"
      },
      {
        protons: "59",
        neutrons: "83",
        weight: "142",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "84",
        weight: "143",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "85",
        weight: "144",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "86",
        weight: "145",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "87",
        weight: "146",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "88",
        weight: "147",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "89",
        weight: "148",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "90",
        weight: "149",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "91",
        weight: "150",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "92",
        weight: "151",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "93",
        weight: "152",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "94",
        weight: "153",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "95",
        weight: "154",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "96",
        weight: "155",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "97",
        weight: "156",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "98",
        weight: "157",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "99",
        weight: "158",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "100",
        weight: "159",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "101",
        weight: "160",
        real: true,
        decay: "B-"
      },
      {
        protons: "59",
        neutrons: "102",
        weight: "161",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "60",
        neutrons: "64",
        weight: "124",
        real: false,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "65",
        weight: "125",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "66",
        weight: "126",
        real: false,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "67",
        weight: "127",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "68",
        weight: "128",
        real: false,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "69",
        weight: "129",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "70",
        weight: "130",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "71",
        weight: "131",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "72",
        weight: "132",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "73",
        weight: "133",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "74",
        weight: "134",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "75",
        weight: "135",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "76",
        weight: "136",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "77",
        weight: "137",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "78",
        weight: "138",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "79",
        weight: "139",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "80",
        weight: "140",
        real: true,
        decay: "EC"
      },
      {
        protons: "60",
        neutrons: "81",
        weight: "141",
        real: true,
        decay: "B+"
      },
      {
        protons: "60",
        neutrons: "82",
        weight: "142",
        real: true,
        decay: "IS"
      },
      {
        protons: "60",
        neutrons: "83",
        weight: "143",
        real: true,
        decay: "IS"
      },
      {
        protons: "60",
        neutrons: "84",
        weight: "144",
        real: true,
        decay: "IS"
      },
      {
        protons: "60",
        neutrons: "85",
        weight: "145",
        real: true,
        decay: "IS"
      },
      {
        protons: "60",
        neutrons: "86",
        weight: "146",
        real: true,
        decay: "IS"
      },
      {
        protons: "60",
        neutrons: "87",
        weight: "147",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "88",
        weight: "148",
        real: true,
        decay: "IS"
      },
      {
        protons: "60",
        neutrons: "89",
        weight: "149",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "90",
        weight: "150",
        real: true,
        decay: "IS"
      },
      {
        protons: "60",
        neutrons: "91",
        weight: "151",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "92",
        weight: "152",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "93",
        weight: "153",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "94",
        weight: "154",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "95",
        weight: "155",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "96",
        weight: "156",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "97",
        weight: "157",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "98",
        weight: "158",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "99",
        weight: "159",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "100",
        weight: "160",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "101",
        weight: "161",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "102",
        weight: "162",
        real: true,
        decay: "B-"
      },
      {
        protons: "60",
        neutrons: "103",
        weight: "163",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "61",
        neutrons: "65",
        weight: "126",
        real: false,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "66",
        weight: "127",
        real: false,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "67",
        weight: "128",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "68",
        weight: "129",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "69",
        weight: "130",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "70",
        weight: "131",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "71",
        weight: "132",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "72",
        weight: "133",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "73",
        weight: "134",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "74",
        weight: "135",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "75",
        weight: "136",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "76",
        weight: "137",
        real: false,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "77",
        weight: "138",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "78",
        weight: "139",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "79",
        weight: "140",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "80",
        weight: "141",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "81",
        weight: "142",
        real: true,
        decay: "B+"
      },
      {
        protons: "61",
        neutrons: "82",
        weight: "143",
        real: true,
        decay: "EC"
      },
      {
        protons: "61",
        neutrons: "83",
        weight: "144",
        real: true,
        decay: "EC"
      },
      {
        protons: "61",
        neutrons: "84",
        weight: "145",
        real: true,
        decay: "EC"
      },
      {
        protons: "61",
        neutrons: "85",
        weight: "146",
        real: true,
        decay: "EC"
      },
      {
        protons: "61",
        neutrons: "86",
        weight: "147",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "87",
        weight: "148",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "88",
        weight: "149",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "89",
        weight: "150",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "90",
        weight: "151",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "91",
        weight: "152",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "92",
        weight: "153",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "93",
        weight: "154",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "94",
        weight: "155",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "95",
        weight: "156",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "96",
        weight: "157",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "97",
        weight: "158",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "98",
        weight: "159",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "99",
        weight: "160",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "100",
        weight: "161",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "101",
        weight: "162",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "102",
        weight: "163",
        real: true,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "103",
        weight: "164",
        real: false,
        decay: "B-"
      },
      {
        protons: "61",
        neutrons: "104",
        weight: "165",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "62",
        neutrons: "66",
        weight: "128",
        real: false,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "67",
        weight: "129",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "68",
        weight: "130",
        real: false,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "69",
        weight: "131",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "70",
        weight: "132",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "71",
        weight: "133",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "72",
        weight: "134",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "73",
        weight: "135",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "74",
        weight: "136",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "75",
        weight: "137",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "76",
        weight: "138",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "77",
        weight: "139",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "78",
        weight: "140",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "79",
        weight: "141",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "80",
        weight: "142",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "81",
        weight: "143",
        real: true,
        decay: "B+"
      },
      {
        protons: "62",
        neutrons: "82",
        weight: "144",
        real: true,
        decay: "IS"
      },
      {
        protons: "62",
        neutrons: "83",
        weight: "145",
        real: true,
        decay: "EC"
      },
      {
        protons: "62",
        neutrons: "84",
        weight: "146",
        real: true,
        decay: "A"
      },
      {
        protons: "62",
        neutrons: "85",
        weight: "147",
        real: true,
        decay: "IS"
      },
      {
        protons: "62",
        neutrons: "86",
        weight: "148",
        real: true,
        decay: "IS"
      },
      {
        protons: "62",
        neutrons: "87",
        weight: "149",
        real: true,
        decay: "IS"
      },
      {
        protons: "62",
        neutrons: "88",
        weight: "150",
        real: true,
        decay: "IS"
      },
      {
        protons: "62",
        neutrons: "89",
        weight: "151",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "90",
        weight: "152",
        real: true,
        decay: "IS"
      },
      {
        protons: "62",
        neutrons: "91",
        weight: "153",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "92",
        weight: "154",
        real: true,
        decay: "IS"
      },
      {
        protons: "62",
        neutrons: "93",
        weight: "155",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "94",
        weight: "156",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "95",
        weight: "157",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "96",
        weight: "158",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "97",
        weight: "159",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "98",
        weight: "160",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "99",
        weight: "161",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "100",
        weight: "162",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "101",
        weight: "163",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "102",
        weight: "164",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "103",
        weight: "165",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "104",
        weight: "166",
        real: true,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "105",
        weight: "167",
        real: false,
        decay: "B-"
      },
      {
        protons: "62",
        neutrons: "106",
        weight: "168",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "63",
        neutrons: "67",
        weight: "130",
        real: true,
        decay: "p"
      },
      {
        protons: "63",
        neutrons: "68",
        weight: "131",
        real: true,
        decay: "p"
      },
      {
        protons: "63",
        neutrons: "69",
        weight: "132",
        real: false,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "70",
        weight: "133",
        real: false,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "71",
        weight: "134",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "72",
        weight: "135",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "73",
        weight: "136",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "74",
        weight: "137",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "75",
        weight: "138",
        real: false,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "76",
        weight: "139",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "77",
        weight: "140",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "78",
        weight: "141",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "79",
        weight: "142",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "80",
        weight: "143",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "81",
        weight: "144",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "82",
        weight: "145",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "83",
        weight: "146",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "84",
        weight: "147",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "85",
        weight: "148",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "86",
        weight: "149",
        real: true,
        decay: "EC"
      },
      {
        protons: "63",
        neutrons: "87",
        weight: "150",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "88",
        weight: "151",
        real: true,
        decay: "IS"
      },
      {
        protons: "63",
        neutrons: "89",
        weight: "152",
        real: true,
        decay: "B+"
      },
      {
        protons: "63",
        neutrons: "90",
        weight: "153",
        real: true,
        decay: "IS"
      },
      {
        protons: "63",
        neutrons: "91",
        weight: "154",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "92",
        weight: "155",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "93",
        weight: "156",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "94",
        weight: "157",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "95",
        weight: "158",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "96",
        weight: "159",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "97",
        weight: "160",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "98",
        weight: "161",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "99",
        weight: "162",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "100",
        weight: "163",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "101",
        weight: "164",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "102",
        weight: "165",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "103",
        weight: "166",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "104",
        weight: "167",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "105",
        weight: "168",
        real: true,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "106",
        weight: "169",
        real: false,
        decay: "B-"
      },
      {
        protons: "63",
        neutrons: "107",
        weight: "170",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "64",
        neutrons: "69",
        weight: "133",
        real: false,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "70",
        weight: "134",
        real: false,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "71",
        weight: "135",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "72",
        weight: "136",
        real: false,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "73",
        weight: "137",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "74",
        weight: "138",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "75",
        weight: "139",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "76",
        weight: "140",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "77",
        weight: "141",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "78",
        weight: "142",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "79",
        weight: "143",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "80",
        weight: "144",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "81",
        weight: "145",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "82",
        weight: "146",
        real: true,
        decay: "EC"
      },
      {
        protons: "64",
        neutrons: "83",
        weight: "147",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "84",
        weight: "148",
        real: true,
        decay: "A"
      },
      {
        protons: "64",
        neutrons: "85",
        weight: "149",
        real: true,
        decay: "B+"
      },
      {
        protons: "64",
        neutrons: "86",
        weight: "150",
        real: true,
        decay: "A"
      },
      {
        protons: "64",
        neutrons: "87",
        weight: "151",
        real: true,
        decay: "EC"
      },
      {
        protons: "64",
        neutrons: "88",
        weight: "152",
        real: true,
        decay: "IS"
      },
      {
        protons: "64",
        neutrons: "89",
        weight: "153",
        real: true,
        decay: "EC"
      },
      {
        protons: "64",
        neutrons: "90",
        weight: "154",
        real: true,
        decay: "IS"
      },
      {
        protons: "64",
        neutrons: "91",
        weight: "155",
        real: true,
        decay: "IS"
      },
      {
        protons: "64",
        neutrons: "92",
        weight: "156",
        real: true,
        decay: "IS"
      },
      {
        protons: "64",
        neutrons: "93",
        weight: "157",
        real: true,
        decay: "IS"
      },
      {
        protons: "64",
        neutrons: "94",
        weight: "158",
        real: true,
        decay: "IS"
      },
      {
        protons: "64",
        neutrons: "95",
        weight: "159",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "96",
        weight: "160",
        real: true,
        decay: "IS"
      },
      {
        protons: "64",
        neutrons: "97",
        weight: "161",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "98",
        weight: "162",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "99",
        weight: "163",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "100",
        weight: "164",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "101",
        weight: "165",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "102",
        weight: "166",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "103",
        weight: "167",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "104",
        weight: "168",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "105",
        weight: "169",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "106",
        weight: "170",
        real: true,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "107",
        weight: "171",
        real: false,
        decay: "B-"
      },
      {
        protons: "64",
        neutrons: "108",
        weight: "172",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "65",
        neutrons: "70",
        weight: "135",
        real: true,
        decay: "p"
      },
      {
        protons: "65",
        neutrons: "71",
        weight: "136",
        real: false,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "72",
        weight: "137",
        real: false,
        decay: "p"
      },
      {
        protons: "65",
        neutrons: "73",
        weight: "138",
        real: false,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "74",
        weight: "139",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "75",
        weight: "140",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "76",
        weight: "141",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "77",
        weight: "142",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "78",
        weight: "143",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "79",
        weight: "144",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "80",
        weight: "145",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "81",
        weight: "146",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "82",
        weight: "147",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "83",
        weight: "148",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "84",
        weight: "149",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "85",
        weight: "150",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "86",
        weight: "151",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "87",
        weight: "152",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "88",
        weight: "153",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "89",
        weight: "154",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "90",
        weight: "155",
        real: true,
        decay: "EC"
      },
      {
        protons: "65",
        neutrons: "91",
        weight: "156",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "92",
        weight: "157",
        real: true,
        decay: "EC"
      },
      {
        protons: "65",
        neutrons: "93",
        weight: "158",
        real: true,
        decay: "B+"
      },
      {
        protons: "65",
        neutrons: "94",
        weight: "159",
        real: true,
        decay: "IS"
      },
      {
        protons: "65",
        neutrons: "95",
        weight: "160",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "96",
        weight: "161",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "97",
        weight: "162",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "98",
        weight: "163",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "99",
        weight: "164",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "100",
        weight: "165",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "101",
        weight: "166",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "102",
        weight: "167",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "103",
        weight: "168",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "104",
        weight: "169",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "105",
        weight: "170",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "106",
        weight: "171",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "107",
        weight: "172",
        real: true,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "108",
        weight: "173",
        real: false,
        decay: "B-"
      },
      {
        protons: "65",
        neutrons: "109",
        weight: "174",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "66",
        neutrons: "72",
        weight: "138",
        real: false,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "73",
        weight: "139",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "74",
        weight: "140",
        real: false,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "75",
        weight: "141",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "76",
        weight: "142",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "77",
        weight: "143",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "78",
        weight: "144",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "79",
        weight: "145",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "80",
        weight: "146",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "81",
        weight: "147",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "82",
        weight: "148",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "83",
        weight: "149",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "84",
        weight: "150",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "85",
        weight: "151",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "86",
        weight: "152",
        real: true,
        decay: "EC"
      },
      {
        protons: "66",
        neutrons: "87",
        weight: "153",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "88",
        weight: "154",
        real: true,
        decay: "A"
      },
      {
        protons: "66",
        neutrons: "89",
        weight: "155",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "90",
        weight: "156",
        real: true,
        decay: "IS"
      },
      {
        protons: "66",
        neutrons: "91",
        weight: "157",
        real: true,
        decay: "B+"
      },
      {
        protons: "66",
        neutrons: "92",
        weight: "158",
        real: true,
        decay: "IS"
      },
      {
        protons: "66",
        neutrons: "93",
        weight: "159",
        real: true,
        decay: "EC"
      },
      {
        protons: "66",
        neutrons: "94",
        weight: "160",
        real: true,
        decay: "IS"
      },
      {
        protons: "66",
        neutrons: "95",
        weight: "161",
        real: true,
        decay: "IS"
      },
      {
        protons: "66",
        neutrons: "96",
        weight: "162",
        real: true,
        decay: "IS"
      },
      {
        protons: "66",
        neutrons: "97",
        weight: "163",
        real: true,
        decay: "IS"
      },
      {
        protons: "66",
        neutrons: "98",
        weight: "164",
        real: true,
        decay: "IS"
      },
      {
        protons: "66",
        neutrons: "99",
        weight: "165",
        real: true,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "100",
        weight: "166",
        real: true,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "101",
        weight: "167",
        real: true,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "102",
        weight: "168",
        real: true,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "103",
        weight: "169",
        real: true,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "104",
        weight: "170",
        real: true,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "105",
        weight: "171",
        real: true,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "106",
        weight: "172",
        real: true,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "107",
        weight: "173",
        real: true,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "108",
        weight: "174",
        real: false,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "109",
        weight: "175",
        real: false,
        decay: "B-"
      },
      {
        protons: "66",
        neutrons: "110",
        weight: "176",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "67",
        neutrons: "73",
        weight: "140",
        real: true,
        decay: "p"
      },
      {
        protons: "67",
        neutrons: "74",
        weight: "141",
        real: true,
        decay: "p"
      },
      {
        protons: "67",
        neutrons: "75",
        weight: "142",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "76",
        weight: "143",
        real: false,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "77",
        weight: "144",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "78",
        weight: "145",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "79",
        weight: "146",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "80",
        weight: "147",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "81",
        weight: "148",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "82",
        weight: "149",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "83",
        weight: "150",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "84",
        weight: "151",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "85",
        weight: "152",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "86",
        weight: "153",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "87",
        weight: "154",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "88",
        weight: "155",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "89",
        weight: "156",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "90",
        weight: "157",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "91",
        weight: "158",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "92",
        weight: "159",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "93",
        weight: "160",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "94",
        weight: "161",
        real: true,
        decay: "EC"
      },
      {
        protons: "67",
        neutrons: "95",
        weight: "162",
        real: true,
        decay: "B+"
      },
      {
        protons: "67",
        neutrons: "96",
        weight: "163",
        real: true,
        decay: "EC"
      },
      {
        protons: "67",
        neutrons: "97",
        weight: "164",
        real: true,
        decay: "EC"
      },
      {
        protons: "67",
        neutrons: "98",
        weight: "165",
        real: true,
        decay: "IS"
      },
      {
        protons: "67",
        neutrons: "99",
        weight: "166",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "100",
        weight: "167",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "101",
        weight: "168",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "102",
        weight: "169",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "103",
        weight: "170",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "104",
        weight: "171",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "105",
        weight: "172",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "106",
        weight: "173",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "107",
        weight: "174",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "108",
        weight: "175",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "109",
        weight: "176",
        real: false,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "110",
        weight: "177",
        real: true,
        decay: "B-"
      },
      {
        protons: "67",
        neutrons: "111",
        weight: "178",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "68",
        neutrons: "74",
        weight: "142",
        real: false,
        decay: "p"
      },
      {
        protons: "68",
        neutrons: "75",
        weight: "143",
        real: false,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "76",
        weight: "144",
        real: false,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "77",
        weight: "145",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "78",
        weight: "146",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "79",
        weight: "147",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "80",
        weight: "148",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "81",
        weight: "149",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "82",
        weight: "150",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "83",
        weight: "151",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "84",
        weight: "152",
        real: true,
        decay: "A"
      },
      {
        protons: "68",
        neutrons: "85",
        weight: "153",
        real: true,
        decay: "A"
      },
      {
        protons: "68",
        neutrons: "86",
        weight: "154",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "87",
        weight: "155",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "88",
        weight: "156",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "89",
        weight: "157",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "90",
        weight: "158",
        real: true,
        decay: "EC"
      },
      {
        protons: "68",
        neutrons: "91",
        weight: "159",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "92",
        weight: "160",
        real: true,
        decay: "EC"
      },
      {
        protons: "68",
        neutrons: "93",
        weight: "161",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "94",
        weight: "162",
        real: true,
        decay: "IS"
      },
      {
        protons: "68",
        neutrons: "95",
        weight: "163",
        real: true,
        decay: "B+"
      },
      {
        protons: "68",
        neutrons: "96",
        weight: "164",
        real: true,
        decay: "IS"
      },
      {
        protons: "68",
        neutrons: "97",
        weight: "165",
        real: true,
        decay: "EC"
      },
      {
        protons: "68",
        neutrons: "98",
        weight: "166",
        real: true,
        decay: "IS"
      },
      {
        protons: "68",
        neutrons: "99",
        weight: "167",
        real: true,
        decay: "IS"
      },
      {
        protons: "68",
        neutrons: "100",
        weight: "168",
        real: true,
        decay: "IS"
      },
      {
        protons: "68",
        neutrons: "101",
        weight: "169",
        real: true,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "102",
        weight: "170",
        real: true,
        decay: "IS"
      },
      {
        protons: "68",
        neutrons: "103",
        weight: "171",
        real: true,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "104",
        weight: "172",
        real: true,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "105",
        weight: "173",
        real: true,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "106",
        weight: "174",
        real: true,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "107",
        weight: "175",
        real: true,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "108",
        weight: "176",
        real: false,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "109",
        weight: "177",
        real: false,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "110",
        weight: "178",
        real: false,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "111",
        weight: "179",
        real: false,
        decay: "B-"
      },
      {
        protons: "68",
        neutrons: "112",
        weight: "180",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "69",
        neutrons: "75",
        weight: "144",
        real: true,
        decay: "p"
      },
      {
        protons: "69",
        neutrons: "76",
        weight: "145",
        real: true,
        decay: "p"
      },
      {
        protons: "69",
        neutrons: "77",
        weight: "146",
        real: true,
        decay: "p"
      },
      {
        protons: "69",
        neutrons: "78",
        weight: "147",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "79",
        weight: "148",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "80",
        weight: "149",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "81",
        weight: "150",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "82",
        weight: "151",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "83",
        weight: "152",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "84",
        weight: "153",
        real: true,
        decay: "A"
      },
      {
        protons: "69",
        neutrons: "85",
        weight: "154",
        real: true,
        decay: "A"
      },
      {
        protons: "69",
        neutrons: "86",
        weight: "155",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "87",
        weight: "156",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "88",
        weight: "157",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "89",
        weight: "158",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "90",
        weight: "159",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "91",
        weight: "160",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "92",
        weight: "161",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "93",
        weight: "162",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "94",
        weight: "163",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "95",
        weight: "164",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "96",
        weight: "165",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "97",
        weight: "166",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "98",
        weight: "167",
        real: true,
        decay: "EC"
      },
      {
        protons: "69",
        neutrons: "99",
        weight: "168",
        real: true,
        decay: "B+"
      },
      {
        protons: "69",
        neutrons: "100",
        weight: "169",
        real: true,
        decay: "IS"
      },
      {
        protons: "69",
        neutrons: "101",
        weight: "170",
        real: true,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "102",
        weight: "171",
        real: true,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "103",
        weight: "172",
        real: true,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "104",
        weight: "173",
        real: true,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "105",
        weight: "174",
        real: true,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "106",
        weight: "175",
        real: true,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "107",
        weight: "176",
        real: true,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "108",
        weight: "177",
        real: true,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "109",
        weight: "178",
        real: false,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "110",
        weight: "179",
        real: false,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "111",
        weight: "180",
        real: false,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "112",
        weight: "181",
        real: false,
        decay: "B-"
      },
      {
        protons: "69",
        neutrons: "113",
        weight: "182",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "70",
        neutrons: "78",
        weight: "148",
        real: false,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "79",
        weight: "149",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "80",
        weight: "150",
        real: false,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "81",
        weight: "151",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "82",
        weight: "152",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "83",
        weight: "153",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "84",
        weight: "154",
        real: true,
        decay: "A"
      },
      {
        protons: "70",
        neutrons: "85",
        weight: "155",
        real: true,
        decay: "A"
      },
      {
        protons: "70",
        neutrons: "86",
        weight: "156",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "87",
        weight: "157",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "88",
        weight: "158",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "89",
        weight: "159",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "90",
        weight: "160",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "91",
        weight: "161",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "92",
        weight: "162",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "93",
        weight: "163",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "94",
        weight: "164",
        real: true,
        decay: "EC"
      },
      {
        protons: "70",
        neutrons: "95",
        weight: "165",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "96",
        weight: "166",
        real: true,
        decay: "EC"
      },
      {
        protons: "70",
        neutrons: "97",
        weight: "167",
        real: true,
        decay: "B+"
      },
      {
        protons: "70",
        neutrons: "98",
        weight: "168",
        real: true,
        decay: "IS"
      },
      {
        protons: "70",
        neutrons: "99",
        weight: "169",
        real: true,
        decay: "EC"
      },
      {
        protons: "70",
        neutrons: "100",
        weight: "170",
        real: true,
        decay: "IS"
      },
      {
        protons: "70",
        neutrons: "101",
        weight: "171",
        real: true,
        decay: "IS"
      },
      {
        protons: "70",
        neutrons: "102",
        weight: "172",
        real: true,
        decay: "IS"
      },
      {
        protons: "70",
        neutrons: "103",
        weight: "173",
        real: true,
        decay: "IS"
      },
      {
        protons: "70",
        neutrons: "104",
        weight: "174",
        real: true,
        decay: "IS"
      },
      {
        protons: "70",
        neutrons: "105",
        weight: "175",
        real: true,
        decay: "B-"
      },
      {
        protons: "70",
        neutrons: "106",
        weight: "176",
        real: true,
        decay: "IS"
      },
      {
        protons: "70",
        neutrons: "107",
        weight: "177",
        real: true,
        decay: "B-"
      },
      {
        protons: "70",
        neutrons: "108",
        weight: "178",
        real: true,
        decay: "B-"
      },
      {
        protons: "70",
        neutrons: "109",
        weight: "179",
        real: true,
        decay: "B-"
      },
      {
        protons: "70",
        neutrons: "110",
        weight: "180",
        real: true,
        decay: "B-"
      },
      {
        protons: "70",
        neutrons: "111",
        weight: "181",
        real: false,
        decay: "B-"
      },
      {
        protons: "70",
        neutrons: "112",
        weight: "182",
        real: false,
        decay: "B-"
      },
      {
        protons: "70",
        neutrons: "113",
        weight: "183",
        real: false,
        decay: "B-"
      },
      {
        protons: "70",
        neutrons: "114",
        weight: "184",
        real: false,
        decay: "B-"
      },
      {
        protons: "70",
        neutrons: "115",
        weight: "185",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "71",
        neutrons: "79",
        weight: "150",
        real: true,
        decay: "p"
      },
      {
        protons: "71",
        neutrons: "80",
        weight: "151",
        real: true,
        decay: "p"
      },
      {
        protons: "71",
        neutrons: "81",
        weight: "152",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "82",
        weight: "153",
        real: true,
        decay: "A"
      },
      {
        protons: "71",
        neutrons: "83",
        weight: "154",
        real: false,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "84",
        weight: "155",
        real: true,
        decay: "A"
      },
      {
        protons: "71",
        neutrons: "85",
        weight: "156",
        real: true,
        decay: "A"
      },
      {
        protons: "71",
        neutrons: "86",
        weight: "157",
        real: false,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "87",
        weight: "158",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "88",
        weight: "159",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "89",
        weight: "160",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "90",
        weight: "161",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "91",
        weight: "162",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "92",
        weight: "163",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "93",
        weight: "164",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "94",
        weight: "165",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "95",
        weight: "166",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "96",
        weight: "167",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "97",
        weight: "168",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "98",
        weight: "169",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "99",
        weight: "170",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "100",
        weight: "171",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "101",
        weight: "172",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "102",
        weight: "173",
        real: true,
        decay: "EC"
      },
      {
        protons: "71",
        neutrons: "103",
        weight: "174",
        real: true,
        decay: "B+"
      },
      {
        protons: "71",
        neutrons: "104",
        weight: "175",
        real: true,
        decay: "IS"
      },
      {
        protons: "71",
        neutrons: "105",
        weight: "176",
        real: true,
        decay: "IS"
      },
      {
        protons: "71",
        neutrons: "106",
        weight: "177",
        real: true,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "107",
        weight: "178",
        real: true,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "108",
        weight: "179",
        real: true,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "109",
        weight: "180",
        real: true,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "110",
        weight: "181",
        real: true,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "111",
        weight: "182",
        real: true,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "112",
        weight: "183",
        real: true,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "113",
        weight: "184",
        real: true,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "114",
        weight: "185",
        real: false,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "115",
        weight: "186",
        real: false,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "116",
        weight: "187",
        real: false,
        decay: "B-"
      },
      {
        protons: "71",
        neutrons: "117",
        weight: "188",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "72",
        neutrons: "81",
        weight: "153",
        real: false,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "82",
        weight: "154",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "83",
        weight: "155",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "84",
        weight: "156",
        real: true,
        decay: "A"
      },
      {
        protons: "72",
        neutrons: "85",
        weight: "157",
        real: true,
        decay: "A"
      },
      {
        protons: "72",
        neutrons: "86",
        weight: "158",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "87",
        weight: "159",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "88",
        weight: "160",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "89",
        weight: "161",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "90",
        weight: "162",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "91",
        weight: "163",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "92",
        weight: "164",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "93",
        weight: "165",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "94",
        weight: "166",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "95",
        weight: "167",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "96",
        weight: "168",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "97",
        weight: "169",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "98",
        weight: "170",
        real: true,
        decay: "EC"
      },
      {
        protons: "72",
        neutrons: "99",
        weight: "171",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "100",
        weight: "172",
        real: true,
        decay: "EC"
      },
      {
        protons: "72",
        neutrons: "101",
        weight: "173",
        real: true,
        decay: "B+"
      },
      {
        protons: "72",
        neutrons: "102",
        weight: "174",
        real: true,
        decay: "IS"
      },
      {
        protons: "72",
        neutrons: "103",
        weight: "175",
        real: true,
        decay: "EC"
      },
      {
        protons: "72",
        neutrons: "104",
        weight: "176",
        real: true,
        decay: "IS"
      },
      {
        protons: "72",
        neutrons: "105",
        weight: "177",
        real: true,
        decay: "IS"
      },
      {
        protons: "72",
        neutrons: "106",
        weight: "178",
        real: true,
        decay: "IS"
      },
      {
        protons: "72",
        neutrons: "107",
        weight: "179",
        real: true,
        decay: "IS"
      },
      {
        protons: "72",
        neutrons: "108",
        weight: "180",
        real: true,
        decay: "IS"
      },
      {
        protons: "72",
        neutrons: "109",
        weight: "181",
        real: true,
        decay: "B-"
      },
      {
        protons: "72",
        neutrons: "110",
        weight: "182",
        real: true,
        decay: "B-"
      },
      {
        protons: "72",
        neutrons: "111",
        weight: "183",
        real: true,
        decay: "B-"
      },
      {
        protons: "72",
        neutrons: "112",
        weight: "184",
        real: true,
        decay: "B-"
      },
      {
        protons: "72",
        neutrons: "113",
        weight: "185",
        real: true,
        decay: "B-"
      },
      {
        protons: "72",
        neutrons: "114",
        weight: "186",
        real: true,
        decay: "B-"
      },
      {
        protons: "72",
        neutrons: "115",
        weight: "187",
        real: false,
        decay: "B-"
      },
      {
        protons: "72",
        neutrons: "116",
        weight: "188",
        real: false,
        decay: "B-"
      },
      {
        protons: "72",
        neutrons: "117",
        weight: "189",
        real: true,
        decay: "B-"
      },
      {
        protons: "72",
        neutrons: "118",
        weight: "190",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "73",
        neutrons: "82",
        weight: "155",
        real: true,
        decay: "p"
      },
      {
        protons: "73",
        neutrons: "83",
        weight: "156",
        real: true,
        decay: "p"
      },
      {
        protons: "73",
        neutrons: "84",
        weight: "157",
        real: true,
        decay: "A"
      },
      {
        protons: "73",
        neutrons: "85",
        weight: "158",
        real: true,
        decay: "A"
      },
      {
        protons: "73",
        neutrons: "86",
        weight: "159",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "87",
        weight: "160",
        real: false,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "88",
        weight: "161",
        real: false,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "89",
        weight: "162",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "90",
        weight: "163",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "91",
        weight: "164",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "92",
        weight: "165",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "93",
        weight: "166",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "94",
        weight: "167",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "95",
        weight: "168",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "96",
        weight: "169",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "97",
        weight: "170",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "98",
        weight: "171",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "99",
        weight: "172",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "100",
        weight: "173",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "101",
        weight: "174",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "102",
        weight: "175",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "103",
        weight: "176",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "104",
        weight: "177",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "105",
        weight: "178",
        real: true,
        decay: "B+"
      },
      {
        protons: "73",
        neutrons: "106",
        weight: "179",
        real: true,
        decay: "EC"
      },
      {
        protons: "73",
        neutrons: "107",
        weight: "180",
        real: true,
        decay: "EC"
      },
      {
        protons: "73",
        neutrons: "108",
        weight: "181",
        real: true,
        decay: "IS"
      },
      {
        protons: "73",
        neutrons: "109",
        weight: "182",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "110",
        weight: "183",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "111",
        weight: "184",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "112",
        weight: "185",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "113",
        weight: "186",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "114",
        weight: "187",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "115",
        weight: "188",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "116",
        weight: "189",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "117",
        weight: "190",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "118",
        weight: "191",
        real: false,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "119",
        weight: "192",
        real: true,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "120",
        weight: "193",
        real: false,
        decay: "B-"
      },
      {
        protons: "73",
        neutrons: "121",
        weight: "194",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "74",
        neutrons: "83",
        weight: "157",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "84",
        weight: "158",
        real: true,
        decay: "A"
      },
      {
        protons: "74",
        neutrons: "85",
        weight: "159",
        real: true,
        decay: "A"
      },
      {
        protons: "74",
        neutrons: "86",
        weight: "160",
        real: true,
        decay: "A"
      },
      {
        protons: "74",
        neutrons: "87",
        weight: "161",
        real: true,
        decay: "A"
      },
      {
        protons: "74",
        neutrons: "88",
        weight: "162",
        real: false,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "89",
        weight: "163",
        real: false,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "90",
        weight: "164",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "91",
        weight: "165",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "92",
        weight: "166",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "93",
        weight: "167",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "94",
        weight: "168",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "95",
        weight: "169",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "96",
        weight: "170",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "97",
        weight: "171",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "98",
        weight: "172",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "99",
        weight: "173",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "100",
        weight: "174",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "101",
        weight: "175",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "102",
        weight: "176",
        real: true,
        decay: "EC"
      },
      {
        protons: "74",
        neutrons: "103",
        weight: "177",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "104",
        weight: "178",
        real: true,
        decay: "EC"
      },
      {
        protons: "74",
        neutrons: "105",
        weight: "179",
        real: true,
        decay: "B+"
      },
      {
        protons: "74",
        neutrons: "106",
        weight: "180",
        real: true,
        decay: "IS"
      },
      {
        protons: "74",
        neutrons: "107",
        weight: "181",
        real: true,
        decay: "EC"
      },
      {
        protons: "74",
        neutrons: "108",
        weight: "182",
        real: true,
        decay: "IS"
      },
      {
        protons: "74",
        neutrons: "109",
        weight: "183",
        real: true,
        decay: "IS"
      },
      {
        protons: "74",
        neutrons: "110",
        weight: "184",
        real: true,
        decay: "IS"
      },
      {
        protons: "74",
        neutrons: "111",
        weight: "185",
        real: true,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "112",
        weight: "186",
        real: true,
        decay: "IS"
      },
      {
        protons: "74",
        neutrons: "113",
        weight: "187",
        real: true,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "114",
        weight: "188",
        real: true,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "115",
        weight: "189",
        real: true,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "116",
        weight: "190",
        real: true,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "117",
        weight: "191",
        real: false,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "118",
        weight: "192",
        real: false,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "119",
        weight: "193",
        real: false,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "120",
        weight: "194",
        real: false,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "121",
        weight: "195",
        real: false,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "122",
        weight: "196",
        real: false,
        decay: "B-"
      },
      {
        protons: "74",
        neutrons: "123",
        weight: "197",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "75",
        neutrons: "84",
        weight: "159",
        real: false,
        decay: "p"
      },
      {
        protons: "75",
        neutrons: "85",
        weight: "160",
        real: true,
        decay: "p"
      },
      {
        protons: "75",
        neutrons: "86",
        weight: "161",
        real: true,
        decay: "p"
      },
      {
        protons: "75",
        neutrons: "87",
        weight: "162",
        real: true,
        decay: "A"
      },
      {
        protons: "75",
        neutrons: "88",
        weight: "163",
        real: false,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "89",
        weight: "164",
        real: true,
        decay: "A"
      },
      {
        protons: "75",
        neutrons: "90",
        weight: "165",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "91",
        weight: "166",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "92",
        weight: "167",
        real: true,
        decay: "A"
      },
      {
        protons: "75",
        neutrons: "93",
        weight: "168",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "94",
        weight: "169",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "95",
        weight: "170",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "96",
        weight: "171",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "97",
        weight: "172",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "98",
        weight: "173",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "99",
        weight: "174",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "100",
        weight: "175",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "101",
        weight: "176",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "102",
        weight: "177",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "103",
        weight: "178",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "104",
        weight: "179",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "105",
        weight: "180",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "106",
        weight: "181",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "107",
        weight: "182",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "108",
        weight: "183",
        real: true,
        decay: "EC"
      },
      {
        protons: "75",
        neutrons: "109",
        weight: "184",
        real: true,
        decay: "B+"
      },
      {
        protons: "75",
        neutrons: "110",
        weight: "185",
        real: true,
        decay: "IS"
      },
      {
        protons: "75",
        neutrons: "111",
        weight: "186",
        real: true,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "112",
        weight: "187",
        real: true,
        decay: "IS"
      },
      {
        protons: "75",
        neutrons: "113",
        weight: "188",
        real: true,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "114",
        weight: "189",
        real: true,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "115",
        weight: "190",
        real: true,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "116",
        weight: "191",
        real: true,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "117",
        weight: "192",
        real: true,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "118",
        weight: "193",
        real: false,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "119",
        weight: "194",
        real: true,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "120",
        weight: "195",
        real: true,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "121",
        weight: "196",
        real: false,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "122",
        weight: "197",
        real: false,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "123",
        weight: "198",
        real: false,
        decay: "B-"
      },
      {
        protons: "75",
        neutrons: "124",
        weight: "199",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "76",
        neutrons: "85",
        weight: "161",
        real: true,
        decay: "A"
      },
      {
        protons: "76",
        neutrons: "86",
        weight: "162",
        real: true,
        decay: "A"
      },
      {
        protons: "76",
        neutrons: "87",
        weight: "163",
        real: true,
        decay: "A"
      },
      {
        protons: "76",
        neutrons: "88",
        weight: "164",
        real: true,
        decay: "A"
      },
      {
        protons: "76",
        neutrons: "89",
        weight: "165",
        real: true,
        decay: "A"
      },
      {
        protons: "76",
        neutrons: "90",
        weight: "166",
        real: true,
        decay: "A"
      },
      {
        protons: "76",
        neutrons: "91",
        weight: "167",
        real: true,
        decay: "A"
      },
      {
        protons: "76",
        neutrons: "92",
        weight: "168",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "93",
        weight: "169",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "94",
        weight: "170",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "95",
        weight: "171",
        real: false,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "96",
        weight: "172",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "97",
        weight: "173",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "98",
        weight: "174",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "99",
        weight: "175",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "100",
        weight: "176",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "101",
        weight: "177",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "102",
        weight: "178",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "103",
        weight: "179",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "104",
        weight: "180",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "105",
        weight: "181",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "106",
        weight: "182",
        real: true,
        decay: "EC"
      },
      {
        protons: "76",
        neutrons: "107",
        weight: "183",
        real: true,
        decay: "B+"
      },
      {
        protons: "76",
        neutrons: "108",
        weight: "184",
        real: true,
        decay: "IS"
      },
      {
        protons: "76",
        neutrons: "109",
        weight: "185",
        real: true,
        decay: "EC"
      },
      {
        protons: "76",
        neutrons: "110",
        weight: "186",
        real: true,
        decay: "IS"
      },
      {
        protons: "76",
        neutrons: "111",
        weight: "187",
        real: true,
        decay: "IS"
      },
      {
        protons: "76",
        neutrons: "112",
        weight: "188",
        real: true,
        decay: "IS"
      },
      {
        protons: "76",
        neutrons: "113",
        weight: "189",
        real: true,
        decay: "IS"
      },
      {
        protons: "76",
        neutrons: "114",
        weight: "190",
        real: true,
        decay: "IS"
      },
      {
        protons: "76",
        neutrons: "115",
        weight: "191",
        real: true,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "116",
        weight: "192",
        real: true,
        decay: "IS"
      },
      {
        protons: "76",
        neutrons: "117",
        weight: "193",
        real: true,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "118",
        weight: "194",
        real: true,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "119",
        weight: "195",
        real: true,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "120",
        weight: "196",
        real: true,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "121",
        weight: "197",
        real: true,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "122",
        weight: "198",
        real: true,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "123",
        weight: "199",
        real: true,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "124",
        weight: "200",
        real: true,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "125",
        weight: "201",
        real: false,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "126",
        weight: "202",
        real: false,
        decay: "B-"
      },
      {
        protons: "76",
        neutrons: "127",
        weight: "203",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "77",
        neutrons: "86",
        weight: "163",
        real: false,
        decay: "p"
      },
      {
        protons: "77",
        neutrons: "87",
        weight: "164",
        real: false,
        decay: "p"
      },
      {
        protons: "77",
        neutrons: "88",
        weight: "165",
        real: false,
        decay: "p"
      },
      {
        protons: "77",
        neutrons: "89",
        weight: "166",
        real: true,
        decay: "A"
      },
      {
        protons: "77",
        neutrons: "90",
        weight: "167",
        real: true,
        decay: "A"
      },
      {
        protons: "77",
        neutrons: "91",
        weight: "168",
        real: true,
        decay: "A"
      },
      {
        protons: "77",
        neutrons: "92",
        weight: "169",
        real: true,
        decay: "A"
      },
      {
        protons: "77",
        neutrons: "93",
        weight: "170",
        real: false,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "94",
        weight: "171",
        real: false,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "95",
        weight: "172",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "96",
        weight: "173",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "97",
        weight: "174",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "98",
        weight: "175",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "99",
        weight: "176",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "100",
        weight: "177",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "101",
        weight: "178",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "102",
        weight: "179",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "103",
        weight: "180",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "104",
        weight: "181",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "105",
        weight: "182",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "106",
        weight: "183",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "107",
        weight: "184",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "108",
        weight: "185",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "109",
        weight: "186",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "110",
        weight: "187",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "111",
        weight: "188",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "112",
        weight: "189",
        real: true,
        decay: "EC"
      },
      {
        protons: "77",
        neutrons: "113",
        weight: "190",
        real: true,
        decay: "B+"
      },
      {
        protons: "77",
        neutrons: "114",
        weight: "191",
        real: true,
        decay: "IS"
      },
      {
        protons: "77",
        neutrons: "115",
        weight: "192",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "116",
        weight: "193",
        real: true,
        decay: "IS"
      },
      {
        protons: "77",
        neutrons: "117",
        weight: "194",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "118",
        weight: "195",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "119",
        weight: "196",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "120",
        weight: "197",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "121",
        weight: "198",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "122",
        weight: "199",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "123",
        weight: "200",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "124",
        weight: "201",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "125",
        weight: "202",
        real: true,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "126",
        weight: "203",
        real: false,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "127",
        weight: "204",
        real: false,
        decay: "B-"
      },
      {
        protons: "77",
        neutrons: "128",
        weight: "205",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "78",
        neutrons: "87",
        weight: "165",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "88",
        weight: "166",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "89",
        weight: "167",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "90",
        weight: "168",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "91",
        weight: "169",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "92",
        weight: "170",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "93",
        weight: "171",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "94",
        weight: "172",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "95",
        weight: "173",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "96",
        weight: "174",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "97",
        weight: "175",
        real: true,
        decay: "A"
      },
      {
        protons: "78",
        neutrons: "98",
        weight: "176",
        real: false,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "99",
        weight: "177",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "100",
        weight: "178",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "101",
        weight: "179",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "102",
        weight: "180",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "103",
        weight: "181",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "104",
        weight: "182",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "105",
        weight: "183",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "106",
        weight: "184",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "107",
        weight: "185",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "108",
        weight: "186",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "109",
        weight: "187",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "110",
        weight: "188",
        real: true,
        decay: "EC"
      },
      {
        protons: "78",
        neutrons: "111",
        weight: "189",
        real: true,
        decay: "B+"
      },
      {
        protons: "78",
        neutrons: "112",
        weight: "190",
        real: true,
        decay: "IS"
      },
      {
        protons: "78",
        neutrons: "113",
        weight: "191",
        real: true,
        decay: "EC"
      },
      {
        protons: "78",
        neutrons: "114",
        weight: "192",
        real: true,
        decay: "IS"
      },
      {
        protons: "78",
        neutrons: "115",
        weight: "193",
        real: true,
        decay: "EC"
      },
      {
        protons: "78",
        neutrons: "116",
        weight: "194",
        real: true,
        decay: "IS"
      },
      {
        protons: "78",
        neutrons: "117",
        weight: "195",
        real: true,
        decay: "IS"
      },
      {
        protons: "78",
        neutrons: "118",
        weight: "196",
        real: true,
        decay: "IS"
      },
      {
        protons: "78",
        neutrons: "119",
        weight: "197",
        real: true,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "120",
        weight: "198",
        real: true,
        decay: "IS"
      },
      {
        protons: "78",
        neutrons: "121",
        weight: "199",
        real: true,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "122",
        weight: "200",
        real: true,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "123",
        weight: "201",
        real: true,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "124",
        weight: "202",
        real: true,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "125",
        weight: "203",
        real: true,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "126",
        weight: "204",
        real: true,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "127",
        weight: "205",
        real: false,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "128",
        weight: "206",
        real: false,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "129",
        weight: "207",
        real: false,
        decay: "B-"
      },
      {
        protons: "78",
        neutrons: "130",
        weight: "208",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "79",
        neutrons: "89",
        weight: "168",
        real: false,
        decay: "p"
      },
      {
        protons: "79",
        neutrons: "90",
        weight: "169",
        real: false,
        decay: "p"
      },
      {
        protons: "79",
        neutrons: "91",
        weight: "170",
        real: true,
        decay: "p"
      },
      {
        protons: "79",
        neutrons: "92",
        weight: "171",
        real: true,
        decay: "p"
      },
      {
        protons: "79",
        neutrons: "93",
        weight: "172",
        real: true,
        decay: "A"
      },
      {
        protons: "79",
        neutrons: "94",
        weight: "173",
        real: true,
        decay: "A"
      },
      {
        protons: "79",
        neutrons: "95",
        weight: "174",
        real: true,
        decay: "A"
      },
      {
        protons: "79",
        neutrons: "96",
        weight: "175",
        real: true,
        decay: "A"
      },
      {
        protons: "79",
        neutrons: "97",
        weight: "176",
        real: true,
        decay: "A"
      },
      {
        protons: "79",
        neutrons: "98",
        weight: "177",
        real: true,
        decay: "A"
      },
      {
        protons: "79",
        neutrons: "99",
        weight: "178",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "100",
        weight: "179",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "101",
        weight: "180",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "102",
        weight: "181",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "103",
        weight: "182",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "104",
        weight: "183",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "105",
        weight: "184",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "106",
        weight: "185",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "107",
        weight: "186",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "108",
        weight: "187",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "109",
        weight: "188",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "110",
        weight: "189",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "111",
        weight: "190",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "112",
        weight: "191",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "113",
        weight: "192",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "114",
        weight: "193",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "115",
        weight: "194",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "116",
        weight: "195",
        real: true,
        decay: "EC"
      },
      {
        protons: "79",
        neutrons: "117",
        weight: "196",
        real: true,
        decay: "B+"
      },
      {
        protons: "79",
        neutrons: "118",
        weight: "197",
        real: true,
        decay: "IS"
      },
      {
        protons: "79",
        neutrons: "119",
        weight: "198",
        real: true,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "120",
        weight: "199",
        real: true,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "121",
        weight: "200",
        real: true,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "122",
        weight: "201",
        real: true,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "123",
        weight: "202",
        real: true,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "124",
        weight: "203",
        real: true,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "125",
        weight: "204",
        real: true,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "126",
        weight: "205",
        real: true,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "127",
        weight: "206",
        real: true,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "128",
        weight: "207",
        real: false,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "129",
        weight: "208",
        real: false,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "130",
        weight: "209",
        real: false,
        decay: "B-"
      },
      {
        protons: "79",
        neutrons: "131",
        weight: "210",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "80",
        neutrons: "90",
        weight: "170",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "91",
        weight: "171",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "92",
        weight: "172",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "93",
        weight: "173",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "94",
        weight: "174",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "95",
        weight: "175",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "96",
        weight: "176",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "97",
        weight: "177",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "98",
        weight: "178",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "99",
        weight: "179",
        real: true,
        decay: "A"
      },
      {
        protons: "80",
        neutrons: "100",
        weight: "180",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "101",
        weight: "181",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "102",
        weight: "182",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "103",
        weight: "183",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "104",
        weight: "184",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "105",
        weight: "185",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "106",
        weight: "186",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "107",
        weight: "187",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "108",
        weight: "188",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "109",
        weight: "189",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "110",
        weight: "190",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "111",
        weight: "191",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "112",
        weight: "192",
        real: true,
        decay: "EC"
      },
      {
        protons: "80",
        neutrons: "113",
        weight: "193",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "114",
        weight: "194",
        real: true,
        decay: "EC"
      },
      {
        protons: "80",
        neutrons: "115",
        weight: "195",
        real: true,
        decay: "B+"
      },
      {
        protons: "80",
        neutrons: "116",
        weight: "196",
        real: true,
        decay: "IS"
      },
      {
        protons: "80",
        neutrons: "117",
        weight: "197",
        real: true,
        decay: "EC"
      },
      {
        protons: "80",
        neutrons: "118",
        weight: "198",
        real: true,
        decay: "IS"
      },
      {
        protons: "80",
        neutrons: "119",
        weight: "199",
        real: true,
        decay: "IS"
      },
      {
        protons: "80",
        neutrons: "120",
        weight: "200",
        real: true,
        decay: "IS"
      },
      {
        protons: "80",
        neutrons: "121",
        weight: "201",
        real: true,
        decay: "IS"
      },
      {
        protons: "80",
        neutrons: "122",
        weight: "202",
        real: true,
        decay: "IS"
      },
      {
        protons: "80",
        neutrons: "123",
        weight: "203",
        real: true,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "124",
        weight: "204",
        real: true,
        decay: "IS"
      },
      {
        protons: "80",
        neutrons: "125",
        weight: "205",
        real: true,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "126",
        weight: "206",
        real: true,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "127",
        weight: "207",
        real: true,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "128",
        weight: "208",
        real: true,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "129",
        weight: "209",
        real: true,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "130",
        weight: "210",
        real: true,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "131",
        weight: "211",
        real: true,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "132",
        weight: "212",
        real: false,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "133",
        weight: "213",
        real: false,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "134",
        weight: "214",
        real: false,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "135",
        weight: "215",
        real: false,
        decay: "B-"
      },
      {
        protons: "80",
        neutrons: "136",
        weight: "216",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "81",
        neutrons: "95",
        weight: "176",
        real: true,
        decay: "p"
      },
      {
        protons: "81",
        neutrons: "96",
        weight: "177",
        real: true,
        decay: "A"
      },
      {
        protons: "81",
        neutrons: "97",
        weight: "178",
        real: true,
        decay: "A"
      },
      {
        protons: "81",
        neutrons: "98",
        weight: "179",
        real: true,
        decay: "A"
      },
      {
        protons: "81",
        neutrons: "99",
        weight: "180",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "100",
        weight: "181",
        real: false,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "101",
        weight: "182",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "102",
        weight: "183",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "103",
        weight: "184",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "104",
        weight: "185",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "105",
        weight: "186",
        real: false,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "106",
        weight: "187",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "107",
        weight: "188",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "108",
        weight: "189",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "109",
        weight: "190",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "110",
        weight: "191",
        real: false,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "111",
        weight: "192",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "112",
        weight: "193",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "113",
        weight: "194",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "114",
        weight: "195",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "115",
        weight: "196",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "116",
        weight: "197",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "117",
        weight: "198",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "118",
        weight: "199",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "119",
        weight: "200",
        real: true,
        decay: "B+"
      },
      {
        protons: "81",
        neutrons: "120",
        weight: "201",
        real: true,
        decay: "EC"
      },
      {
        protons: "81",
        neutrons: "121",
        weight: "202",
        real: true,
        decay: "EC"
      },
      {
        protons: "81",
        neutrons: "122",
        weight: "203",
        real: true,
        decay: "IS"
      },
      {
        protons: "81",
        neutrons: "123",
        weight: "204",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "124",
        weight: "205",
        real: true,
        decay: "IS"
      },
      {
        protons: "81",
        neutrons: "125",
        weight: "206",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "126",
        weight: "207",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "127",
        weight: "208",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "128",
        weight: "209",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "129",
        weight: "210",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "130",
        weight: "211",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "131",
        weight: "212",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "132",
        weight: "213",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "133",
        weight: "214",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "134",
        weight: "215",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "135",
        weight: "216",
        real: true,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "136",
        weight: "217",
        real: false,
        decay: "B-"
      },
      {
        protons: "81",
        neutrons: "137",
        weight: "218",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "82",
        neutrons: "96",
        weight: "178",
        real: true,
        decay: "A"
      },
      {
        protons: "82",
        neutrons: "97",
        weight: "179",
        real: true,
        decay: "A"
      },
      {
        protons: "82",
        neutrons: "98",
        weight: "180",
        real: true,
        decay: "A"
      },
      {
        protons: "82",
        neutrons: "99",
        weight: "181",
        real: true,
        decay: "A"
      },
      {
        protons: "82",
        neutrons: "100",
        weight: "182",
        real: true,
        decay: "A"
      },
      {
        protons: "82",
        neutrons: "101",
        weight: "183",
        real: true,
        decay: "A"
      },
      {
        protons: "82",
        neutrons: "102",
        weight: "184",
        real: true,
        decay: "A"
      },
      {
        protons: "82",
        neutrons: "103",
        weight: "185",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "104",
        weight: "186",
        real: false,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "105",
        weight: "187",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "106",
        weight: "188",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "107",
        weight: "189",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "108",
        weight: "190",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "109",
        weight: "191",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "110",
        weight: "192",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "111",
        weight: "193",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "112",
        weight: "194",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "113",
        weight: "195",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "114",
        weight: "196",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "115",
        weight: "197",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "116",
        weight: "198",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "117",
        weight: "199",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "118",
        weight: "200",
        real: true,
        decay: "EC"
      },
      {
        protons: "82",
        neutrons: "119",
        weight: "201",
        real: true,
        decay: "B+"
      },
      {
        protons: "82",
        neutrons: "120",
        weight: "202",
        real: true,
        decay: "EC"
      },
      {
        protons: "82",
        neutrons: "121",
        weight: "203",
        real: true,
        decay: "EC"
      },
      {
        protons: "82",
        neutrons: "122",
        weight: "204",
        real: true,
        decay: "IS"
      },
      {
        protons: "82",
        neutrons: "123",
        weight: "205",
        real: true,
        decay: "EC"
      },
      {
        protons: "82",
        neutrons: "124",
        weight: "206",
        real: true,
        decay: "IS"
      },
      {
        protons: "82",
        neutrons: "125",
        weight: "207",
        real: true,
        decay: "IS"
      },
      {
        protons: "82",
        neutrons: "126",
        weight: "208",
        real: true,
        decay: "IS"
      },
      {
        protons: "82",
        neutrons: "127",
        weight: "209",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "128",
        weight: "210",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "129",
        weight: "211",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "130",
        weight: "212",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "131",
        weight: "213",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "132",
        weight: "214",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "133",
        weight: "215",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "134",
        weight: "216",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "135",
        weight: "217",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "136",
        weight: "218",
        real: true,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "137",
        weight: "219",
        real: false,
        decay: "B-"
      },
      {
        protons: "82",
        neutrons: "138",
        weight: "220",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "83",
        neutrons: "101",
        weight: "184",
        real: true,
        decay: "A"
      },
      {
        protons: "83",
        neutrons: "102",
        weight: "185",
        real: false,
        decay: "p"
      },
      {
        protons: "83",
        neutrons: "103",
        weight: "186",
        real: true,
        decay: "A"
      },
      {
        protons: "83",
        neutrons: "104",
        weight: "187",
        real: true,
        decay: "A"
      },
      {
        protons: "83",
        neutrons: "105",
        weight: "188",
        real: true,
        decay: "A"
      },
      {
        protons: "83",
        neutrons: "106",
        weight: "189",
        real: true,
        decay: "A"
      },
      {
        protons: "83",
        neutrons: "107",
        weight: "190",
        real: true,
        decay: "A"
      },
      {
        protons: "83",
        neutrons: "108",
        weight: "191",
        real: true,
        decay: "A"
      },
      {
        protons: "83",
        neutrons: "109",
        weight: "192",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "110",
        weight: "193",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "111",
        weight: "194",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "112",
        weight: "195",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "113",
        weight: "196",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "114",
        weight: "197",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "115",
        weight: "198",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "116",
        weight: "199",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "117",
        weight: "200",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "118",
        weight: "201",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "119",
        weight: "202",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "120",
        weight: "203",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "121",
        weight: "204",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "122",
        weight: "205",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "123",
        weight: "206",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "124",
        weight: "207",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "125",
        weight: "208",
        real: true,
        decay: "B+"
      },
      {
        protons: "83",
        neutrons: "126",
        weight: "209",
        real: true,
        decay: "IS"
      },
      {
        protons: "83",
        neutrons: "127",
        weight: "210",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "128",
        weight: "211",
        real: true,
        decay: "A"
      },
      {
        protons: "83",
        neutrons: "129",
        weight: "212",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "130",
        weight: "213",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "131",
        weight: "214",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "132",
        weight: "215",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "133",
        weight: "216",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "134",
        weight: "217",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "135",
        weight: "218",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "136",
        weight: "219",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "137",
        weight: "220",
        real: true,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "138",
        weight: "221",
        real: false,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "139",
        weight: "222",
        real: false,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "140",
        weight: "223",
        real: false,
        decay: "B-"
      },
      {
        protons: "83",
        neutrons: "141",
        weight: "224",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "84",
        neutrons: "102",
        weight: "186",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "103",
        weight: "187",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "104",
        weight: "188",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "105",
        weight: "189",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "106",
        weight: "190",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "107",
        weight: "191",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "108",
        weight: "192",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "109",
        weight: "193",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "110",
        weight: "194",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "111",
        weight: "195",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "112",
        weight: "196",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "113",
        weight: "197",
        real: false,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "114",
        weight: "198",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "115",
        weight: "199",
        real: true,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "116",
        weight: "200",
        real: true,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "117",
        weight: "201",
        real: true,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "118",
        weight: "202",
        real: true,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "119",
        weight: "203",
        real: true,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "120",
        weight: "204",
        real: true,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "121",
        weight: "205",
        real: true,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "122",
        weight: "206",
        real: true,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "123",
        weight: "207",
        real: true,
        decay: "B+"
      },
      {
        protons: "84",
        neutrons: "124",
        weight: "208",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "125",
        weight: "209",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "126",
        weight: "210",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "127",
        weight: "211",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "128",
        weight: "212",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "129",
        weight: "213",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "130",
        weight: "214",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "131",
        weight: "215",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "132",
        weight: "216",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "133",
        weight: "217",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "134",
        weight: "218",
        real: true,
        decay: "A"
      },
      {
        protons: "84",
        neutrons: "135",
        weight: "219",
        real: true,
        decay: "B-"
      },
      {
        protons: "84",
        neutrons: "136",
        weight: "220",
        real: false,
        decay: "B-"
      },
      {
        protons: "84",
        neutrons: "137",
        weight: "221",
        real: true,
        decay: "B-"
      },
      {
        protons: "84",
        neutrons: "138",
        weight: "222",
        real: true,
        decay: "B-"
      },
      {
        protons: "84",
        neutrons: "139",
        weight: "223",
        real: false,
        decay: "B-"
      },
      {
        protons: "84",
        neutrons: "140",
        weight: "224",
        real: false,
        decay: "B-"
      },
      {
        protons: "84",
        neutrons: "141",
        weight: "225",
        real: false,
        decay: "B-"
      },
      {
        protons: "84",
        neutrons: "142",
        weight: "226",
        real: false,
        decay: "B-"
      },
      {
        protons: "84",
        neutrons: "143",
        weight: "227",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "85",
        neutrons: "106",
        weight: "191",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "107",
        weight: "192",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "108",
        weight: "193",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "109",
        weight: "194",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "110",
        weight: "195",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "111",
        weight: "196",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "112",
        weight: "197",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "113",
        weight: "198",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "114",
        weight: "199",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "115",
        weight: "200",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "116",
        weight: "201",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "117",
        weight: "202",
        real: true,
        decay: "B+"
      },
      {
        protons: "85",
        neutrons: "118",
        weight: "203",
        real: true,
        decay: "B+"
      },
      {
        protons: "85",
        neutrons: "119",
        weight: "204",
        real: true,
        decay: "B+"
      },
      {
        protons: "85",
        neutrons: "120",
        weight: "205",
        real: true,
        decay: "B+"
      },
      {
        protons: "85",
        neutrons: "121",
        weight: "206",
        real: true,
        decay: "B+"
      },
      {
        protons: "85",
        neutrons: "122",
        weight: "207",
        real: true,
        decay: "B+"
      },
      {
        protons: "85",
        neutrons: "123",
        weight: "208",
        real: true,
        decay: "B+"
      },
      {
        protons: "85",
        neutrons: "124",
        weight: "209",
        real: true,
        decay: "B+"
      },
      {
        protons: "85",
        neutrons: "125",
        weight: "210",
        real: true,
        decay: "B+"
      },
      {
        protons: "85",
        neutrons: "126",
        weight: "211",
        real: true,
        decay: "EC"
      },
      {
        protons: "85",
        neutrons: "127",
        weight: "212",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "128",
        weight: "213",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "129",
        weight: "214",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "130",
        weight: "215",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "131",
        weight: "216",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "132",
        weight: "217",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "133",
        weight: "218",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "134",
        weight: "219",
        real: true,
        decay: "A"
      },
      {
        protons: "85",
        neutrons: "135",
        weight: "220",
        real: true,
        decay: "B-"
      },
      {
        protons: "85",
        neutrons: "136",
        weight: "221",
        real: true,
        decay: "B-"
      },
      {
        protons: "85",
        neutrons: "137",
        weight: "222",
        real: true,
        decay: "B-"
      },
      {
        protons: "85",
        neutrons: "138",
        weight: "223",
        real: true,
        decay: "B-"
      },
      {
        protons: "85",
        neutrons: "139",
        weight: "224",
        real: true,
        decay: "B-"
      },
      {
        protons: "85",
        neutrons: "140",
        weight: "225",
        real: false,
        decay: "B-"
      },
      {
        protons: "85",
        neutrons: "141",
        weight: "226",
        real: false,
        decay: "B-"
      },
      {
        protons: "85",
        neutrons: "142",
        weight: "227",
        real: false,
        decay: "B-"
      },
      {
        protons: "85",
        neutrons: "143",
        weight: "228",
        real: false,
        decay: "B-"
      },
      {
        protons: "85",
        neutrons: "144",
        weight: "229",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "86",
        neutrons: "107",
        weight: "193",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "108",
        weight: "194",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "109",
        weight: "195",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "110",
        weight: "196",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "111",
        weight: "197",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "112",
        weight: "198",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "113",
        weight: "199",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "114",
        weight: "200",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "115",
        weight: "201",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "116",
        weight: "202",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "117",
        weight: "203",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "118",
        weight: "204",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "119",
        weight: "205",
        real: true,
        decay: "B+"
      },
      {
        protons: "86",
        neutrons: "120",
        weight: "206",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "121",
        weight: "207",
        real: true,
        decay: "B+"
      },
      {
        protons: "86",
        neutrons: "122",
        weight: "208",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "123",
        weight: "209",
        real: true,
        decay: "B+"
      },
      {
        protons: "86",
        neutrons: "124",
        weight: "210",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "125",
        weight: "211",
        real: true,
        decay: "B+"
      },
      {
        protons: "86",
        neutrons: "126",
        weight: "212",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "127",
        weight: "213",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "128",
        weight: "214",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "129",
        weight: "215",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "130",
        weight: "216",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "131",
        weight: "217",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "132",
        weight: "218",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "133",
        weight: "219",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "134",
        weight: "220",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "135",
        weight: "221",
        real: true,
        decay: "B-"
      },
      {
        protons: "86",
        neutrons: "136",
        weight: "222",
        real: true,
        decay: "A"
      },
      {
        protons: "86",
        neutrons: "137",
        weight: "223",
        real: true,
        decay: "B-"
      },
      {
        protons: "86",
        neutrons: "138",
        weight: "224",
        real: true,
        decay: "B-"
      },
      {
        protons: "86",
        neutrons: "139",
        weight: "225",
        real: true,
        decay: "B-"
      },
      {
        protons: "86",
        neutrons: "140",
        weight: "226",
        real: true,
        decay: "B-"
      },
      {
        protons: "86",
        neutrons: "141",
        weight: "227",
        real: true,
        decay: "B-"
      },
      {
        protons: "86",
        neutrons: "142",
        weight: "228",
        real: true,
        decay: "B-"
      },
      {
        protons: "86",
        neutrons: "143",
        weight: "229",
        real: true,
        decay: "B-"
      },
      {
        protons: "86",
        neutrons: "144",
        weight: "230",
        real: false,
        decay: "B-"
      },
      {
        protons: "86",
        neutrons: "145",
        weight: "231",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "87",
        neutrons: "110",
        weight: "197",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "111",
        weight: "198",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "112",
        weight: "199",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "113",
        weight: "200",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "114",
        weight: "201",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "115",
        weight: "202",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "116",
        weight: "203",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "117",
        weight: "204",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "118",
        weight: "205",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "119",
        weight: "206",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "120",
        weight: "207",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "121",
        weight: "208",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "122",
        weight: "209",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "123",
        weight: "210",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "124",
        weight: "211",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "125",
        weight: "212",
        real: true,
        decay: "B+"
      },
      {
        protons: "87",
        neutrons: "126",
        weight: "213",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "127",
        weight: "214",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "128",
        weight: "215",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "129",
        weight: "216",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "130",
        weight: "217",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "131",
        weight: "218",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "132",
        weight: "219",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "133",
        weight: "220",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "134",
        weight: "221",
        real: true,
        decay: "A"
      },
      {
        protons: "87",
        neutrons: "135",
        weight: "222",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "136",
        weight: "223",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "137",
        weight: "224",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "138",
        weight: "225",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "139",
        weight: "226",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "140",
        weight: "227",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "141",
        weight: "228",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "142",
        weight: "229",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "143",
        weight: "230",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "144",
        weight: "231",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "145",
        weight: "232",
        real: true,
        decay: "B-"
      },
      {
        protons: "87",
        neutrons: "146",
        weight: "233",
        real: true,
        decay: "B-"
      }
    ],
    [
      {
        protons: "88",
        neutrons: "113",
        weight: "201",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "114",
        weight: "202",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "115",
        weight: "203",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "116",
        weight: "204",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "117",
        weight: "205",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "118",
        weight: "206",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "119",
        weight: "207",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "120",
        weight: "208",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "121",
        weight: "209",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "122",
        weight: "210",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "123",
        weight: "211",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "124",
        weight: "212",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "125",
        weight: "213",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "126",
        weight: "214",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "127",
        weight: "215",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "128",
        weight: "216",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "129",
        weight: "217",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "130",
        weight: "218",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "131",
        weight: "219",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "132",
        weight: "220",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "133",
        weight: "221",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "134",
        weight: "222",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "135",
        weight: "223",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "136",
        weight: "224",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "137",
        weight: "225",
        real: true,
        decay: "B-"
      },
      {
        protons: "88",
        neutrons: "138",
        weight: "226",
        real: true,
        decay: "A"
      },
      {
        protons: "88",
        neutrons: "139",
        weight: "227",
        real: true,
        decay: "B-"
      },
      {
        protons: "88",
        neutrons: "140",
        weight: "228",
        real: true,
        decay: "B-"
      },
      {
        protons: "88",
        neutrons: "141",
        weight: "229",
        real: true,
        decay: "B-"
      },
      {
        protons: "88",
        neutrons: "142",
        weight: "230",
        real: true,
        decay: "B-"
      },
      {
        protons: "88",
        neutrons: "143",
        weight: "231",
        real: true,
        decay: "B-"
      },
      {
        protons: "88",
        neutrons: "144",
        weight: "232",
        real: true,
        decay: "B-"
      },
      {
        protons: "88",
        neutrons: "145",
        weight: "233",
        real: true,
        decay: "B-"
      },
      {
        protons: "88",
        neutrons: "146",
        weight: "234",
        real: true,
        decay: "B-"
      },
      {
        protons: "88",
        neutrons: "147",
        weight: "235",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "89",
        neutrons: "116",
        weight: "205",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "117",
        weight: "206",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "118",
        weight: "207",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "119",
        weight: "208",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "120",
        weight: "209",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "121",
        weight: "210",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "122",
        weight: "211",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "123",
        weight: "212",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "124",
        weight: "213",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "125",
        weight: "214",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "126",
        weight: "215",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "127",
        weight: "216",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "128",
        weight: "217",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "129",
        weight: "218",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "130",
        weight: "219",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "131",
        weight: "220",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "132",
        weight: "221",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "133",
        weight: "222",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "134",
        weight: "223",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "135",
        weight: "224",
        real: true,
        decay: "B+"
      },
      {
        protons: "89",
        neutrons: "136",
        weight: "225",
        real: true,
        decay: "A"
      },
      {
        protons: "89",
        neutrons: "137",
        weight: "226",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "138",
        weight: "227",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "139",
        weight: "228",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "140",
        weight: "229",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "141",
        weight: "230",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "142",
        weight: "231",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "143",
        weight: "232",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "144",
        weight: "233",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "145",
        weight: "234",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "146",
        weight: "235",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "147",
        weight: "236",
        real: true,
        decay: "B-"
      },
      {
        protons: "89",
        neutrons: "148",
        weight: "237",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "90",
        neutrons: "118",
        weight: "208",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "119",
        weight: "209",
        real: false,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "120",
        weight: "210",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "121",
        weight: "211",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "122",
        weight: "212",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "123",
        weight: "213",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "124",
        weight: "214",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "125",
        weight: "215",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "126",
        weight: "216",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "127",
        weight: "217",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "128",
        weight: "218",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "129",
        weight: "219",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "130",
        weight: "220",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "131",
        weight: "221",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "132",
        weight: "222",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "133",
        weight: "223",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "134",
        weight: "224",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "135",
        weight: "225",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "136",
        weight: "226",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "137",
        weight: "227",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "138",
        weight: "228",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "139",
        weight: "229",
        real: true,
        decay: "A"
      },
      {
        protons: "90",
        neutrons: "140",
        weight: "230",
        real: true,
        decay: "IS"
      },
      {
        protons: "90",
        neutrons: "141",
        weight: "231",
        real: true,
        decay: "B-"
      },
      {
        protons: "90",
        neutrons: "142",
        weight: "232",
        real: true,
        decay: "IS"
      },
      {
        protons: "90",
        neutrons: "143",
        weight: "233",
        real: true,
        decay: "B-"
      },
      {
        protons: "90",
        neutrons: "144",
        weight: "234",
        real: true,
        decay: "B-"
      },
      {
        protons: "90",
        neutrons: "145",
        weight: "235",
        real: true,
        decay: "B-"
      },
      {
        protons: "90",
        neutrons: "146",
        weight: "236",
        real: true,
        decay: "B-"
      },
      {
        protons: "90",
        neutrons: "147",
        weight: "237",
        real: true,
        decay: "B-"
      },
      {
        protons: "90",
        neutrons: "148",
        weight: "238",
        real: true,
        decay: "B-"
      },
      {
        protons: "90",
        neutrons: "149",
        weight: "239",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "91",
        neutrons: "120",
        weight: "211",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "121",
        weight: "212",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "122",
        weight: "213",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "123",
        weight: "214",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "124",
        weight: "215",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "125",
        weight: "216",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "126",
        weight: "217",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "127",
        weight: "218",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "128",
        weight: "219",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "129",
        weight: "220",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "130",
        weight: "221",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "131",
        weight: "222",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "132",
        weight: "223",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "133",
        weight: "224",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "134",
        weight: "225",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "135",
        weight: "226",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "136",
        weight: "227",
        real: true,
        decay: "A"
      },
      {
        protons: "91",
        neutrons: "137",
        weight: "228",
        real: true,
        decay: "B+"
      },
      {
        protons: "91",
        neutrons: "138",
        weight: "229",
        real: true,
        decay: "EC"
      },
      {
        protons: "91",
        neutrons: "139",
        weight: "230",
        real: true,
        decay: "B+"
      },
      {
        protons: "91",
        neutrons: "140",
        weight: "231",
        real: true,
        decay: "IS"
      },
      {
        protons: "91",
        neutrons: "141",
        weight: "232",
        real: true,
        decay: "B-"
      },
      {
        protons: "91",
        neutrons: "142",
        weight: "233",
        real: true,
        decay: "B-"
      },
      {
        protons: "91",
        neutrons: "143",
        weight: "234",
        real: true,
        decay: "B-"
      },
      {
        protons: "91",
        neutrons: "144",
        weight: "235",
        real: true,
        decay: "B-"
      },
      {
        protons: "91",
        neutrons: "145",
        weight: "236",
        real: true,
        decay: "B-"
      },
      {
        protons: "91",
        neutrons: "146",
        weight: "237",
        real: true,
        decay: "B-"
      },
      {
        protons: "91",
        neutrons: "147",
        weight: "238",
        real: true,
        decay: "B-"
      },
      {
        protons: "91",
        neutrons: "148",
        weight: "239",
        real: true,
        decay: "B-"
      },
      {
        protons: "91",
        neutrons: "149",
        weight: "240",
        real: false,
        decay: "B-"
      },
      {
        protons: "91",
        neutrons: "150",
        weight: "241",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "92",
        neutrons: "123",
        weight: "215",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "124",
        weight: "216",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "125",
        weight: "217",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "126",
        weight: "218",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "127",
        weight: "219",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "128",
        weight: "220",
        real: false,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "129",
        weight: "221",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "130",
        weight: "222",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "131",
        weight: "223",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "132",
        weight: "224",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "133",
        weight: "225",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "134",
        weight: "226",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "135",
        weight: "227",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "136",
        weight: "228",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "137",
        weight: "229",
        real: true,
        decay: "B+"
      },
      {
        protons: "92",
        neutrons: "138",
        weight: "230",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "139",
        weight: "231",
        real: true,
        decay: "EC"
      },
      {
        protons: "92",
        neutrons: "140",
        weight: "232",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "141",
        weight: "233",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "142",
        weight: "234",
        real: true,
        decay: "IS"
      },
      {
        protons: "92",
        neutrons: "143",
        weight: "235",
        real: true,
        decay: "IS"
      },
      {
        protons: "92",
        neutrons: "144",
        weight: "236",
        real: true,
        decay: "A"
      },
      {
        protons: "92",
        neutrons: "145",
        weight: "237",
        real: true,
        decay: "B-"
      },
      {
        protons: "92",
        neutrons: "146",
        weight: "238",
        real: true,
        decay: "IS"
      },
      {
        protons: "92",
        neutrons: "147",
        weight: "239",
        real: true,
        decay: "B-"
      },
      {
        protons: "92",
        neutrons: "148",
        weight: "240",
        real: true,
        decay: "B-"
      },
      {
        protons: "92",
        neutrons: "149",
        weight: "241",
        real: false,
        decay: "B-"
      },
      {
        protons: "92",
        neutrons: "150",
        weight: "242",
        real: true,
        decay: "B-"
      },
      {
        protons: "92",
        neutrons: "151",
        weight: "243",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "93",
        neutrons: "126",
        weight: "219",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "127",
        weight: "220",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "128",
        weight: "221",
        real: false,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "129",
        weight: "222",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "130",
        weight: "223",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "131",
        weight: "224",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "132",
        weight: "225",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "133",
        weight: "226",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "134",
        weight: "227",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "135",
        weight: "228",
        real: true,
        decay: "EC"
      },
      {
        protons: "93",
        neutrons: "136",
        weight: "229",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "137",
        weight: "230",
        real: true,
        decay: "B+"
      },
      {
        protons: "93",
        neutrons: "138",
        weight: "231",
        real: true,
        decay: "B+"
      },
      {
        protons: "93",
        neutrons: "139",
        weight: "232",
        real: true,
        decay: "B+"
      },
      {
        protons: "93",
        neutrons: "140",
        weight: "233",
        real: true,
        decay: "B+"
      },
      {
        protons: "93",
        neutrons: "141",
        weight: "234",
        real: true,
        decay: "B+"
      },
      {
        protons: "93",
        neutrons: "142",
        weight: "235",
        real: true,
        decay: "EC"
      },
      {
        protons: "93",
        neutrons: "143",
        weight: "236",
        real: true,
        decay: "EC"
      },
      {
        protons: "93",
        neutrons: "144",
        weight: "237",
        real: true,
        decay: "A"
      },
      {
        protons: "93",
        neutrons: "145",
        weight: "238",
        real: true,
        decay: "B-"
      },
      {
        protons: "93",
        neutrons: "146",
        weight: "239",
        real: true,
        decay: "B-"
      },
      {
        protons: "93",
        neutrons: "147",
        weight: "240",
        real: true,
        decay: "B-"
      },
      {
        protons: "93",
        neutrons: "148",
        weight: "241",
        real: true,
        decay: "B-"
      },
      {
        protons: "93",
        neutrons: "149",
        weight: "242",
        real: true,
        decay: "B-"
      },
      {
        protons: "93",
        neutrons: "150",
        weight: "243",
        real: true,
        decay: "B-"
      },
      {
        protons: "93",
        neutrons: "151",
        weight: "244",
        real: true,
        decay: "B-"
      },
      {
        protons: "93",
        neutrons: "152",
        weight: "245",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "94",
        neutrons: "127",
        weight: "221",
        real: false,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "128",
        weight: "222",
        real: false,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "129",
        weight: "223",
        real: false,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "130",
        weight: "224",
        real: false,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "131",
        weight: "225",
        real: false,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "132",
        weight: "226",
        real: false,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "133",
        weight: "227",
        real: false,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "134",
        weight: "228",
        real: true,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "135",
        weight: "229",
        real: true,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "136",
        weight: "230",
        real: true,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "137",
        weight: "231",
        real: false,
        decay: "B+"
      },
      {
        protons: "94",
        neutrons: "138",
        weight: "232",
        real: true,
        decay: "EC"
      },
      {
        protons: "94",
        neutrons: "139",
        weight: "233",
        real: true,
        decay: "B+"
      },
      {
        protons: "94",
        neutrons: "140",
        weight: "234",
        real: true,
        decay: "EC"
      },
      {
        protons: "94",
        neutrons: "141",
        weight: "235",
        real: true,
        decay: "B+"
      },
      {
        protons: "94",
        neutrons: "142",
        weight: "236",
        real: true,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "143",
        weight: "237",
        real: true,
        decay: "EC"
      },
      {
        protons: "94",
        neutrons: "144",
        weight: "238",
        real: true,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "145",
        weight: "239",
        real: true,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "146",
        weight: "240",
        real: true,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "147",
        weight: "241",
        real: true,
        decay: "B-"
      },
      {
        protons: "94",
        neutrons: "148",
        weight: "242",
        real: true,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "149",
        weight: "243",
        real: true,
        decay: "B-"
      },
      {
        protons: "94",
        neutrons: "150",
        weight: "244",
        real: true,
        decay: "A"
      },
      {
        protons: "94",
        neutrons: "151",
        weight: "245",
        real: true,
        decay: "B-"
      },
      {
        protons: "94",
        neutrons: "152",
        weight: "246",
        real: true,
        decay: "B-"
      },
      {
        protons: "94",
        neutrons: "153",
        weight: "247",
        real: true,
        decay: "B-"
      }
    ],
    [
      {
        protons: "95",
        neutrons: "128",
        weight: "223",
        real: true,
        decay: "A"
      },
      {
        protons: "95",
        neutrons: "129",
        weight: "224",
        real: false,
        decay: "A"
      },
      {
        protons: "95",
        neutrons: "130",
        weight: "225",
        real: false,
        decay: "A"
      },
      {
        protons: "95",
        neutrons: "131",
        weight: "226",
        real: false,
        decay: "A"
      },
      {
        protons: "95",
        neutrons: "132",
        weight: "227",
        real: false,
        decay: "A"
      },
      {
        protons: "95",
        neutrons: "133",
        weight: "228",
        real: false,
        decay: "A"
      },
      {
        protons: "95",
        neutrons: "134",
        weight: "229",
        real: true,
        decay: "A"
      },
      {
        protons: "95",
        neutrons: "135",
        weight: "230",
        real: true,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "136",
        weight: "231",
        real: false,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "137",
        weight: "232",
        real: true,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "138",
        weight: "233",
        real: false,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "139",
        weight: "234",
        real: true,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "140",
        weight: "235",
        real: true,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "141",
        weight: "236",
        real: true,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "142",
        weight: "237",
        real: true,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "143",
        weight: "238",
        real: true,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "144",
        weight: "239",
        real: true,
        decay: "EC"
      },
      {
        protons: "95",
        neutrons: "145",
        weight: "240",
        real: true,
        decay: "B+"
      },
      {
        protons: "95",
        neutrons: "146",
        weight: "241",
        real: true,
        decay: "A"
      },
      {
        protons: "95",
        neutrons: "147",
        weight: "242",
        real: true,
        decay: "B-"
      },
      {
        protons: "95",
        neutrons: "148",
        weight: "243",
        real: true,
        decay: "A"
      },
      {
        protons: "95",
        neutrons: "149",
        weight: "244",
        real: true,
        decay: "B-"
      },
      {
        protons: "95",
        neutrons: "150",
        weight: "245",
        real: true,
        decay: "B-"
      },
      {
        protons: "95",
        neutrons: "151",
        weight: "246",
        real: true,
        decay: "B-"
      },
      {
        protons: "95",
        neutrons: "152",
        weight: "247",
        real: true,
        decay: "B-"
      },
      {
        protons: "95",
        neutrons: "153",
        weight: "248",
        real: false,
        decay: "B-"
      },
      {
        protons: "95",
        neutrons: "154",
        weight: "249",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "96",
        neutrons: "135",
        weight: "231",
        real: false,
        decay: "B+"
      },
      {
        protons: "96",
        neutrons: "136",
        weight: "232",
        real: false,
        decay: "B+"
      },
      {
        protons: "96",
        neutrons: "137",
        weight: "233",
        real: true,
        decay: "A"
      },
      {
        protons: "96",
        neutrons: "138",
        weight: "234",
        real: true,
        decay: "B+"
      },
      {
        protons: "96",
        neutrons: "139",
        weight: "235",
        real: false,
        decay: "B+"
      },
      {
        protons: "96",
        neutrons: "140",
        weight: "236",
        real: true,
        decay: "B+"
      },
      {
        protons: "96",
        neutrons: "141",
        weight: "237",
        real: false,
        decay: "B+"
      },
      {
        protons: "96",
        neutrons: "142",
        weight: "238",
        real: false,
        decay: "EC"
      },
      {
        protons: "96",
        neutrons: "143",
        weight: "239",
        real: true,
        decay: "B+"
      },
      {
        protons: "96",
        neutrons: "144",
        weight: "240",
        real: true,
        decay: "A"
      },
      {
        protons: "96",
        neutrons: "145",
        weight: "241",
        real: true,
        decay: "EC"
      },
      {
        protons: "96",
        neutrons: "146",
        weight: "242",
        real: true,
        decay: "A"
      },
      {
        protons: "96",
        neutrons: "147",
        weight: "243",
        real: true,
        decay: "A"
      },
      {
        protons: "96",
        neutrons: "148",
        weight: "244",
        real: true,
        decay: "A"
      },
      {
        protons: "96",
        neutrons: "149",
        weight: "245",
        real: true,
        decay: "A"
      },
      {
        protons: "96",
        neutrons: "150",
        weight: "246",
        real: true,
        decay: "A"
      },
      {
        protons: "96",
        neutrons: "151",
        weight: "247",
        real: true,
        decay: "A"
      },
      {
        protons: "96",
        neutrons: "152",
        weight: "248",
        real: true,
        decay: "A"
      },
      {
        protons: "96",
        neutrons: "153",
        weight: "249",
        real: true,
        decay: "B-"
      },
      {
        protons: "96",
        neutrons: "154",
        weight: "250",
        real: true,
        decay: "SF"
      },
      {
        protons: "96",
        neutrons: "155",
        weight: "251",
        real: true,
        decay: "B-"
      },
      {
        protons: "96",
        neutrons: "156",
        weight: "252",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "97",
        neutrons: "136",
        weight: "233",
        real: true,
        decay: "A"
      },
      {
        protons: "97",
        neutrons: "137",
        weight: "234",
        real: true,
        decay: "A"
      },
      {
        protons: "97",
        neutrons: "138",
        weight: "235",
        real: false,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "139",
        weight: "236",
        real: true,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "140",
        weight: "237",
        real: false,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "141",
        weight: "238",
        real: true,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "142",
        weight: "239",
        real: true,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "143",
        weight: "240",
        real: false,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "144",
        weight: "241",
        real: true,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "145",
        weight: "242",
        real: true,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "146",
        weight: "243",
        real: true,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "147",
        weight: "244",
        real: false,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "148",
        weight: "245",
        real: true,
        decay: "EC"
      },
      {
        protons: "97",
        neutrons: "149",
        weight: "246",
        real: true,
        decay: "B+"
      },
      {
        protons: "97",
        neutrons: "150",
        weight: "247",
        real: true,
        decay: "A"
      },
      {
        protons: "97",
        neutrons: "151",
        weight: "248",
        real: false,
        decay: "A"
      },
      {
        protons: "97",
        neutrons: "152",
        weight: "249",
        real: true,
        decay: "B-"
      },
      {
        protons: "97",
        neutrons: "153",
        weight: "250",
        real: true,
        decay: "B-"
      },
      {
        protons: "97",
        neutrons: "154",
        weight: "251",
        real: true,
        decay: "B-"
      },
      {
        protons: "97",
        neutrons: "155",
        weight: "252",
        real: true,
        decay: "B-"
      },
      {
        protons: "97",
        neutrons: "156",
        weight: "253",
        real: false,
        decay: "B-"
      },
      {
        protons: "97",
        neutrons: "157",
        weight: "254",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "98",
        neutrons: "139",
        weight: "237",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "140",
        weight: "238",
        real: true,
        decay: "SF"
      },
      {
        protons: "98",
        neutrons: "141",
        weight: "239",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "142",
        weight: "240",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "143",
        weight: "241",
        real: false,
        decay: "B+"
      },
      {
        protons: "98",
        neutrons: "144",
        weight: "242",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "145",
        weight: "243",
        real: true,
        decay: "B+"
      },
      {
        protons: "98",
        neutrons: "146",
        weight: "244",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "147",
        weight: "245",
        real: true,
        decay: "B+"
      },
      {
        protons: "98",
        neutrons: "148",
        weight: "246",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "149",
        weight: "247",
        real: true,
        decay: "EC"
      },
      {
        protons: "98",
        neutrons: "150",
        weight: "248",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "151",
        weight: "249",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "152",
        weight: "250",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "153",
        weight: "251",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "154",
        weight: "252",
        real: true,
        decay: "A"
      },
      {
        protons: "98",
        neutrons: "155",
        weight: "253",
        real: true,
        decay: "B-"
      },
      {
        protons: "98",
        neutrons: "156",
        weight: "254",
        real: true,
        decay: "SF"
      },
      {
        protons: "98",
        neutrons: "157",
        weight: "255",
        real: true,
        decay: "B-"
      },
      {
        protons: "98",
        neutrons: "158",
        weight: "256",
        real: true,
        decay: "SF"
      }
    ],
    [
      {
        protons: "99",
        neutrons: "140",
        weight: "239",
        real: false,
        decay: "A"
      },
      {
        protons: "99",
        neutrons: "141",
        weight: "240",
        real: true,
        decay: "A"
      },
      {
        protons: "99",
        neutrons: "142",
        weight: "241",
        real: true,
        decay: "A"
      },
      {
        protons: "99",
        neutrons: "143",
        weight: "242",
        real: true,
        decay: "A"
      },
      {
        protons: "99",
        neutrons: "144",
        weight: "243",
        real: true,
        decay: "A"
      },
      {
        protons: "99",
        neutrons: "145",
        weight: "244",
        real: true,
        decay: "B+"
      },
      {
        protons: "99",
        neutrons: "146",
        weight: "245",
        real: true,
        decay: "B+"
      },
      {
        protons: "99",
        neutrons: "147",
        weight: "246",
        real: true,
        decay: "B+"
      },
      {
        protons: "99",
        neutrons: "148",
        weight: "247",
        real: true,
        decay: "B+"
      },
      {
        protons: "99",
        neutrons: "149",
        weight: "248",
        real: true,
        decay: "B+"
      },
      {
        protons: "99",
        neutrons: "150",
        weight: "249",
        real: true,
        decay: "B+"
      },
      {
        protons: "99",
        neutrons: "151",
        weight: "250",
        real: true,
        decay: "B+"
      },
      {
        protons: "99",
        neutrons: "152",
        weight: "251",
        real: true,
        decay: "EC"
      },
      {
        protons: "99",
        neutrons: "153",
        weight: "252",
        real: true,
        decay: "A"
      },
      {
        protons: "99",
        neutrons: "154",
        weight: "253",
        real: true,
        decay: "A"
      },
      {
        protons: "99",
        neutrons: "155",
        weight: "254",
        real: true,
        decay: "A"
      },
      {
        protons: "99",
        neutrons: "156",
        weight: "255",
        real: true,
        decay: "B-"
      },
      {
        protons: "99",
        neutrons: "157",
        weight: "256",
        real: true,
        decay: "B-"
      },
      {
        protons: "99",
        neutrons: "158",
        weight: "257",
        real: true,
        decay: "B-"
      },
      {
        protons: "99",
        neutrons: "159",
        weight: "258",
        real: false,
        decay: "B-"
      }
    ],
    [
      {
        protons: "100",
        neutrons: "141",
        weight: "241",
        real: true,
        decay: "SF"
      },
      {
        protons: "100",
        neutrons: "142",
        weight: "242",
        real: true,
        decay: "SF"
      },
      {
        protons: "100",
        neutrons: "143",
        weight: "243",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "144",
        weight: "244",
        real: true,
        decay: "SF"
      },
      {
        protons: "100",
        neutrons: "145",
        weight: "245",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "146",
        weight: "246",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "147",
        weight: "247",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "148",
        weight: "248",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "149",
        weight: "249",
        real: false,
        decay: "B+"
      },
      {
        protons: "100",
        neutrons: "150",
        weight: "250",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "151",
        weight: "251",
        real: true,
        decay: "B+"
      },
      {
        protons: "100",
        neutrons: "152",
        weight: "252",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "153",
        weight: "253",
        real: true,
        decay: "EC"
      },
      {
        protons: "100",
        neutrons: "154",
        weight: "254",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "155",
        weight: "255",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "156",
        weight: "256",
        real: true,
        decay: "SF"
      },
      {
        protons: "100",
        neutrons: "157",
        weight: "257",
        real: true,
        decay: "A"
      },
      {
        protons: "100",
        neutrons: "158",
        weight: "258",
        real: true,
        decay: "SF"
      },
      {
        protons: "100",
        neutrons: "159",
        weight: "259",
        real: true,
        decay: "SF"
      },
      {
        protons: "100",
        neutrons: "160",
        weight: "260",
        real: false,
        decay: "SF"
      }
    ],
    [
      {
        protons: "101",
        neutrons: "143",
        weight: "244",
        real: true,
        decay: "A"
      },
      {
        protons: "101",
        neutrons: "144",
        weight: "245",
        real: true,
        decay: "A"
      },
      {
        protons: "101",
        neutrons: "145",
        weight: "246",
        real: true,
        decay: "A"
      },
      {
        protons: "101",
        neutrons: "146",
        weight: "247",
        real: true,
        decay: "A"
      },
      {
        protons: "101",
        neutrons: "147",
        weight: "248",
        real: true,
        decay: "B+"
      },
      {
        protons: "101",
        neutrons: "148",
        weight: "249",
        real: true,
        decay: "A"
      },
      {
        protons: "101",
        neutrons: "149",
        weight: "250",
        real: true,
        decay: "B+"
      },
      {
        protons: "101",
        neutrons: "150",
        weight: "251",
        real: false,
        decay: "B+"
      },
      {
        protons: "101",
        neutrons: "151",
        weight: "252",
        real: true,
        decay: "B+"
      },
      {
        protons: "101",
        neutrons: "152",
        weight: "253",
        real: true,
        decay: "B+"
      },
      {
        protons: "101",
        neutrons: "153",
        weight: "254",
        real: true,
        decay: "B+"
      },
      {
        protons: "101",
        neutrons: "154",
        weight: "255",
        real: true,
        decay: "B+"
      },
      {
        protons: "101",
        neutrons: "155",
        weight: "256",
        real: true,
        decay: "B+"
      },
      {
        protons: "101",
        neutrons: "156",
        weight: "257",
        real: true,
        decay: "EC"
      },
      {
        protons: "101",
        neutrons: "157",
        weight: "258",
        real: true,
        decay: "A"
      },
      {
        protons: "101",
        neutrons: "158",
        weight: "259",
        real: true,
        decay: "SF"
      },
      {
        protons: "101",
        neutrons: "159",
        weight: "260",
        real: true,
        decay: "SF"
      },
      {
        protons: "101",
        neutrons: "160",
        weight: "261",
        real: false,
        decay: "A"
      },
      {
        protons: "101",
        neutrons: "161",
        weight: "262",
        real: false,
        decay: "SF"
      }
    ],
    [
      {
        protons: "102",
        neutrons: "146",
        weight: "248",
        real: false,
        decay: "SF"
      },
      {
        protons: "102",
        neutrons: "147",
        weight: "249",
        real: false,
        decay: "B+"
      },
      {
        protons: "102",
        neutrons: "148",
        weight: "250",
        real: true,
        decay: "SF"
      },
      {
        protons: "102",
        neutrons: "149",
        weight: "251",
        real: true,
        decay: "A"
      },
      {
        protons: "102",
        neutrons: "150",
        weight: "252",
        real: true,
        decay: "A"
      },
      {
        protons: "102",
        neutrons: "151",
        weight: "253",
        real: true,
        decay: "A"
      },
      {
        protons: "102",
        neutrons: "152",
        weight: "254",
        real: true,
        decay: "A"
      },
      {
        protons: "102",
        neutrons: "153",
        weight: "255",
        real: true,
        decay: "B+"
      },
      {
        protons: "102",
        neutrons: "154",
        weight: "256",
        real: true,
        decay: "A"
      },
      {
        protons: "102",
        neutrons: "155",
        weight: "257",
        real: true,
        decay: "A"
      },
      {
        protons: "102",
        neutrons: "156",
        weight: "258",
        real: true,
        decay: "SF"
      },
      {
        protons: "102",
        neutrons: "157",
        weight: "259",
        real: true,
        decay: "A"
      },
      {
        protons: "102",
        neutrons: "158",
        weight: "260",
        real: true,
        decay: "SF"
      },
      {
        protons: "102",
        neutrons: "159",
        weight: "261",
        real: false,
        decay: "A"
      },
      {
        protons: "102",
        neutrons: "160",
        weight: "262",
        real: true,
        decay: "SF"
      },
      {
        protons: "102",
        neutrons: "161",
        weight: "263",
        real: false,
        decay: "A"
      },
      {
        protons: "102",
        neutrons: "162",
        weight: "264",
        real: false,
        decay: "A"
      }
    ],
    [
      {
        protons: "103",
        neutrons: "148",
        weight: "251",
        real: false,
        decay: "B+"
      },
      {
        protons: "103",
        neutrons: "149",
        weight: "252",
        real: true,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "150",
        weight: "253",
        real: true,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "151",
        weight: "254",
        real: true,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "152",
        weight: "255",
        real: true,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "153",
        weight: "256",
        real: true,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "154",
        weight: "257",
        real: true,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "155",
        weight: "258",
        real: true,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "156",
        weight: "259",
        real: true,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "157",
        weight: "260",
        real: true,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "158",
        weight: "261",
        real: true,
        decay: "SF"
      },
      {
        protons: "103",
        neutrons: "159",
        weight: "262",
        real: true,
        decay: "B+"
      },
      {
        protons: "103",
        neutrons: "160",
        weight: "263",
        real: false,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "161",
        weight: "264",
        real: false,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "162",
        weight: "265",
        real: false,
        decay: "A"
      },
      {
        protons: "103",
        neutrons: "163",
        weight: "266",
        real: true,
        decay: "SF"
      }
    ],
    [
      {
        protons: "104",
        neutrons: "149",
        weight: "253",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "150",
        weight: "254",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "151",
        weight: "255",
        real: true,
        decay: "A"
      },
      {
        protons: "104",
        neutrons: "152",
        weight: "256",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "153",
        weight: "257",
        real: true,
        decay: "A"
      },
      {
        protons: "104",
        neutrons: "154",
        weight: "258",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "155",
        weight: "259",
        real: true,
        decay: "A"
      },
      {
        protons: "104",
        neutrons: "156",
        weight: "260",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "157",
        weight: "261",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "158",
        weight: "262",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "159",
        weight: "263",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "160",
        weight: "264",
        real: false,
        decay: "A"
      },
      {
        protons: "104",
        neutrons: "161",
        weight: "265",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "162",
        weight: "266",
        real: false,
        decay: "A"
      },
      {
        protons: "104",
        neutrons: "163",
        weight: "267",
        real: true,
        decay: "SF"
      },
      {
        protons: "104",
        neutrons: "164",
        weight: "268",
        real: false,
        decay: "A"
      }
    ],
    [
      {
        protons: "105",
        neutrons: "150",
        weight: "255",
        real: true,
        decay: "SF"
      },
      {
        protons: "105",
        neutrons: "151",
        weight: "256",
        real: true,
        decay: "A"
      },
      {
        protons: "105",
        neutrons: "152",
        weight: "257",
        real: true,
        decay: "A"
      },
      {
        protons: "105",
        neutrons: "153",
        weight: "258",
        real: true,
        decay: "A"
      },
      {
        protons: "105",
        neutrons: "154",
        weight: "259",
        real: true,
        decay: "A"
      },
      {
        protons: "105",
        neutrons: "155",
        weight: "260",
        real: true,
        decay: "A"
      },
      {
        protons: "105",
        neutrons: "156",
        weight: "261",
        real: true,
        decay: "SF"
      },
      {
        protons: "105",
        neutrons: "157",
        weight: "262",
        real: true,
        decay: "SF"
      },
      {
        protons: "105",
        neutrons: "158",
        weight: "263",
        real: true,
        decay: "SF"
      },
      {
        protons: "105",
        neutrons: "159",
        weight: "264",
        real: false,
        decay: "A"
      },
      {
        protons: "105",
        neutrons: "160",
        weight: "265",
        real: false,
        decay: "A"
      },
      {
        protons: "105",
        neutrons: "161",
        weight: "266",
        real: false,
        decay: "A"
      },
      {
        protons: "105",
        neutrons: "162",
        weight: "267",
        real: true,
        decay: "SF"
      },
      {
        protons: "105",
        neutrons: "163",
        weight: "268",
        real: true,
        decay: "SF"
      },
      {
        protons: "105",
        neutrons: "164",
        weight: "269",
        real: false,
        decay: "A"
      },
      {
        protons: "105",
        neutrons: "165",
        weight: "270",
        real: true,
        decay: "SF"
      }
    ],
    [
      {
        protons: "106",
        neutrons: "152",
        weight: "258",
        real: true,
        decay: "SF"
      },
      {
        protons: "106",
        neutrons: "153",
        weight: "259",
        real: true,
        decay: "A"
      },
      {
        protons: "106",
        neutrons: "154",
        weight: "260",
        real: true,
        decay: "SF"
      },
      {
        protons: "106",
        neutrons: "155",
        weight: "261",
        real: true,
        decay: "A"
      },
      {
        protons: "106",
        neutrons: "156",
        weight: "262",
        real: true,
        decay: "SF"
      },
      {
        protons: "106",
        neutrons: "157",
        weight: "263",
        real: true,
        decay: "A"
      },
      {
        protons: "106",
        neutrons: "158",
        weight: "264",
        real: true,
        decay: "SF"
      },
      {
        protons: "106",
        neutrons: "159",
        weight: "265",
        real: true,
        decay: "A"
      },
      {
        protons: "106",
        neutrons: "160",
        weight: "266",
        real: true,
        decay: "SF"
      },
      {
        protons: "106",
        neutrons: "161",
        weight: "267",
        real: true,
        decay: "SF"
      },
      {
        protons: "106",
        neutrons: "162",
        weight: "268",
        real: false,
        decay: "A"
      },
      {
        protons: "106",
        neutrons: "163",
        weight: "269",
        real: true,
        decay: "A"
      },
      {
        protons: "106",
        neutrons: "164",
        weight: "270",
        real: false,
        decay: "A"
      },
      {
        protons: "106",
        neutrons: "165",
        weight: "271",
        real: true,
        decay: "A"
      },
      {
        protons: "106",
        neutrons: "166",
        weight: "272",
        real: false,
        decay: "A"
      },
      {
        protons: "106",
        neutrons: "167",
        weight: "273",
        real: false,
        decay: "SF"
      }
    ],
    [
      {
        protons: "107",
        neutrons: "153",
        weight: "260",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "154",
        weight: "261",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "155",
        weight: "262",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "156",
        weight: "263",
        real: false,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "157",
        weight: "264",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "158",
        weight: "265",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "159",
        weight: "266",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "160",
        weight: "267",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "161",
        weight: "268",
        real: false,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "162",
        weight: "269",
        real: false,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "163",
        weight: "270",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "164",
        weight: "271",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "165",
        weight: "272",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "166",
        weight: "273",
        real: false,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "167",
        weight: "274",
        real: true,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "168",
        weight: "275",
        real: false,
        decay: "SF"
      },
      {
        protons: "107",
        neutrons: "169",
        weight: "276",
        real: false,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "170",
        weight: "277",
        real: false,
        decay: "A"
      },
      {
        protons: "107",
        neutrons: "171",
        weight: "278",
        real: true,
        decay: "SF"
      }
    ],
    [
      {
        protons: "108",
        neutrons: "155",
        weight: "263",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "156",
        weight: "264",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "157",
        weight: "265",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "158",
        weight: "266",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "159",
        weight: "267",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "160",
        weight: "268",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "161",
        weight: "269",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "162",
        weight: "270",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "163",
        weight: "271",
        real: false,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "164",
        weight: "272",
        real: false,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "165",
        weight: "273",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "166",
        weight: "274",
        real: false,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "167",
        weight: "275",
        real: true,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "168",
        weight: "276",
        real: false,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "169",
        weight: "277",
        real: true,
        decay: "SF"
      },
      {
        protons: "108",
        neutrons: "170",
        weight: "278",
        real: true,
        decay: "SF"
      },
      {
        protons: "108",
        neutrons: "171",
        weight: "279",
        real: false,
        decay: "A"
      },
      {
        protons: "108",
        neutrons: "172",
        weight: "280",
        real: false,
        decay: "A"
      }
    ],
    [
      {
        protons: "109",
        neutrons: "156",
        weight: "265",
        real: false,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "157",
        weight: "266",
        real: true,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "158",
        weight: "267",
        real: false,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "159",
        weight: "268",
        real: true,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "160",
        weight: "269",
        real: false,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "161",
        weight: "270",
        real: true,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "162",
        weight: "271",
        real: false,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "163",
        weight: "272",
        real: false,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "164",
        weight: "273",
        real: false,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "165",
        weight: "274",
        real: true,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "166",
        weight: "275",
        real: true,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "167",
        weight: "276",
        real: true,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "168",
        weight: "277",
        real: true,
        decay: "SF"
      },
      {
        protons: "109",
        neutrons: "169",
        weight: "278",
        real: true,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "170",
        weight: "279",
        real: false,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "171",
        weight: "280",
        real: false,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "172",
        weight: "281",
        real: false,
        decay: "A"
      },
      {
        protons: "109",
        neutrons: "173",
        weight: "282",
        real: true,
        decay: "A"
      }
    ],
    [
      {
        protons: "110",
        neutrons: "157",
        weight: "267",
        real: true,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "158",
        weight: "268",
        real: false,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "159",
        weight: "269",
        real: true,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "160",
        weight: "270",
        real: true,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "161",
        weight: "271",
        real: true,
        decay: "SF"
      },
      {
        protons: "110",
        neutrons: "162",
        weight: "272",
        real: false,
        decay: "SF"
      },
      {
        protons: "110",
        neutrons: "163",
        weight: "273",
        real: true,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "164",
        weight: "274",
        real: false,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "165",
        weight: "275",
        real: false,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "166",
        weight: "276",
        real: false,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "167",
        weight: "277",
        real: true,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "168",
        weight: "278",
        real: false,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "169",
        weight: "279",
        real: true,
        decay: "SF"
      },
      {
        protons: "110",
        neutrons: "170",
        weight: "280",
        real: true,
        decay: "SF"
      },
      {
        protons: "110",
        neutrons: "171",
        weight: "281",
        real: true,
        decay: "SF"
      },
      {
        protons: "110",
        neutrons: "172",
        weight: "282",
        real: true,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "173",
        weight: "283",
        real: false,
        decay: "A"
      },
      {
        protons: "110",
        neutrons: "174",
        weight: "284",
        real: false,
        decay: "A"
      }
    ],
    [
      {
        protons: "111",
        neutrons: "161",
        weight: "272",
        real: true,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "162",
        weight: "273",
        real: false,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "163",
        weight: "274",
        real: true,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "164",
        weight: "275",
        real: false,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "165",
        weight: "276",
        real: false,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "166",
        weight: "277",
        real: false,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "167",
        weight: "278",
        real: true,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "168",
        weight: "279",
        real: true,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "169",
        weight: "280",
        real: true,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "170",
        weight: "281",
        real: true,
        decay: "SF"
      },
      {
        protons: "111",
        neutrons: "171",
        weight: "282",
        real: true,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "172",
        weight: "283",
        real: false,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "173",
        weight: "284",
        real: false,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "174",
        weight: "285",
        real: false,
        decay: "A"
      },
      {
        protons: "111",
        neutrons: "175",
        weight: "286",
        real: true,
        decay: "A"
      }
    ],
    [
      {
        protons: "112",
        neutrons: "164",
        weight: "276",
        real: false,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "165",
        weight: "277",
        real: true,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "166",
        weight: "278",
        real: false,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "167",
        weight: "279",
        real: false,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "168",
        weight: "280",
        real: false,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "169",
        weight: "281",
        real: true,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "170",
        weight: "282",
        real: true,
        decay: "SF"
      },
      {
        protons: "112",
        neutrons: "171",
        weight: "283",
        real: true,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "172",
        weight: "284",
        real: true,
        decay: "SF"
      },
      {
        protons: "112",
        neutrons: "173",
        weight: "285",
        real: true,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "174",
        weight: "286",
        real: true,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "175",
        weight: "287",
        real: false,
        decay: "A"
      },
      {
        protons: "112",
        neutrons: "176",
        weight: "288",
        real: false,
        decay: "A"
      }
    ],
    [
      {
        protons: "113",
        neutrons: "165",
        weight: "278",
        real: true,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "166",
        weight: "279",
        real: false,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "167",
        weight: "280",
        real: false,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "168",
        weight: "281",
        real: false,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "169",
        weight: "282",
        real: true,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "170",
        weight: "283",
        real: true,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "171",
        weight: "284",
        real: true,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "172",
        weight: "285",
        real: true,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "173",
        weight: "286",
        real: true,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "174",
        weight: "287",
        real: false,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "175",
        weight: "288",
        real: false,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "176",
        weight: "289",
        real: false,
        decay: "A"
      },
      {
        protons: "113",
        neutrons: "177",
        weight: "290",
        real: true,
        decay: "A"
      }
    ],
    [
      {
        protons: "114",
        neutrons: "170",
        weight: "284",
        real: true,
        decay: "SF"
      },
      {
        protons: "114",
        neutrons: "171",
        weight: "285",
        real: true,
        decay: "A"
      },
      {
        protons: "114",
        neutrons: "172",
        weight: "286",
        real: true,
        decay: "A"
      },
      {
        protons: "114",
        neutrons: "173",
        weight: "287",
        real: true,
        decay: "A"
      },
      {
        protons: "114",
        neutrons: "174",
        weight: "288",
        real: true,
        decay: "A"
      },
      {
        protons: "114",
        neutrons: "175",
        weight: "289",
        real: true,
        decay: "A"
      },
      {
        protons: "114",
        neutrons: "176",
        weight: "290",
        real: true,
        decay: "A"
      },
      {
        protons: "114",
        neutrons: "177",
        weight: "291",
        real: false,
        decay: "A"
      }
    ],
    [
      {
        protons: "115",
        neutrons: "172",
        weight: "287",
        real: true,
        decay: "A"
      },
      {
        protons: "115",
        neutrons: "173",
        weight: "288",
        real: true,
        decay: "A"
      },
      {
        protons: "115",
        neutrons: "174",
        weight: "289",
        real: true,
        decay: "A"
      },
      {
        protons: "115",
        neutrons: "175",
        weight: "290",
        real: true,
        decay: "A"
      },
      {
        protons: "115",
        neutrons: "176",
        weight: "291",
        real: false,
        decay: "A"
      },
      {
        protons: "115",
        neutrons: "177",
        weight: "292",
        real: false,
        decay: "A"
      }
    ],
    [
      {
        protons: "116",
        neutrons: "173",
        weight: "289",
        real: false,
        decay: "A"
      },
      {
        protons: "116",
        neutrons: "174",
        weight: "290",
        real: true,
        decay: "A"
      },
      {
        protons: "116",
        neutrons: "175",
        weight: "291",
        real: true,
        decay: "A"
      },
      {
        protons: "116",
        neutrons: "176",
        weight: "292",
        real: true,
        decay: "A"
      },
      {
        protons: "116",
        neutrons: "177",
        weight: "293",
        real: true,
        decay: "A"
      }
    ],
    [
      {
        protons: "117",
        neutrons: "174",
        weight: "291",
        real: false,
        decay: "A"
      },
      {
        protons: "117",
        neutrons: "175",
        weight: "292",
        real: false,
        decay: "A"
      },
      {
        protons: "117",
        neutrons: "176",
        weight: "293",
        real: true,
        decay: "A"
      },
      {
        protons: "117",
        neutrons: "177",
        weight: "294",
        real: true,
        decay: "A"
      }
    ],
    [
      {
        protons: "118",
        neutrons: "175",
        weight: "293",
        real: false,
        decay: "A"
      },
      {
        protons: "118",
        neutrons: "176",
        weight: "294",
        real: true,
        decay: "A"
      },
      {
        protons: "118",
        neutrons: "177",
        weight: "295",
        real: true,
        decay: "A"
      }
    ]
  ];
  