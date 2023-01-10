export type BonkVote = {
  version: "0.1.0";
  name: "bonk_vote";
  instructions: [
    {
      name: "initializeGlobalState";
      accounts: [
        {
          name: "globalState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "developerBonk";
          isMut: true;
          isSigner: false;
        },
        {
          name: "developer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mintAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bonkPerVote";
          type: "u32";
        },
        {
          name: "percentageBurn";
          type: "u8";
        },
        {
          name: "percentageDeveloper";
          type: "u8";
        }
      ];
    },
    {
      name: "initializePair";
      accounts: [
        {
          name: "pair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "developer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "aName";
          type: "string";
        },
        {
          name: "aLink";
          type: "string";
        },
        {
          name: "bName";
          type: "string";
        },
        {
          name: "bLink";
          type: "string";
        }
      ];
    },
    {
      name: "vote";
      accounts: [
        {
          name: "globalState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "pair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "voter";
          isMut: true;
          isSigner: true;
        },
        {
          name: "voterBonk";
          isMut: true;
          isSigner: false;
        },
        {
          name: "developerBonk";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "aName";
          type: "string";
        },
        {
          name: "bName";
          type: "string";
        },
        {
          name: "voteA";
          type: "bool";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "globalState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "developerBonk";
            type: "publicKey";
          },
          {
            name: "bonkPerVote";
            type: "u32";
          },
          {
            name: "percentageBurn";
            type: "u8";
          },
          {
            name: "percentageDeveloper";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "pair";
      type: {
        kind: "struct";
        fields: [
          {
            name: "aName";
            type: "string";
          },
          {
            name: "aLink";
            type: "string";
          },
          {
            name: "aVote";
            type: "u16";
          },
          {
            name: "bName";
            type: "string";
          },
          {
            name: "bLink";
            type: "string";
          },
          {
            name: "bVote";
            type: "u16";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "ImbalancedDistribution";
      msg: "Total distribution must be 100";
    }
  ];
};

export const IDL: BonkVote = {
  version: "0.1.0",
  name: "bonk_vote",
  instructions: [
    {
      name: "initializeGlobalState",
      accounts: [
        {
          name: "globalState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "developerBonk",
          isMut: true,
          isSigner: false,
        },
        {
          name: "developer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mintAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bonkPerVote",
          type: "u32",
        },
        {
          name: "percentageBurn",
          type: "u8",
        },
        {
          name: "percentageDeveloper",
          type: "u8",
        },
      ],
    },
    {
      name: "initializePair",
      accounts: [
        {
          name: "pair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "developer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "aName",
          type: "string",
        },
        {
          name: "aLink",
          type: "string",
        },
        {
          name: "bName",
          type: "string",
        },
        {
          name: "bLink",
          type: "string",
        },
      ],
    },
    {
      name: "vote",
      accounts: [
        {
          name: "globalState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "pair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "voter",
          isMut: true,
          isSigner: true,
        },
        {
          name: "voterBonk",
          isMut: true,
          isSigner: false,
        },
        {
          name: "developerBonk",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "aName",
          type: "string",
        },
        {
          name: "bName",
          type: "string",
        },
        {
          name: "voteA",
          type: "bool",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "globalState",
      type: {
        kind: "struct",
        fields: [
          {
            name: "developerBonk",
            type: "publicKey",
          },
          {
            name: "bonkPerVote",
            type: "u32",
          },
          {
            name: "percentageBurn",
            type: "u8",
          },
          {
            name: "percentageDeveloper",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "pair",
      type: {
        kind: "struct",
        fields: [
          {
            name: "aName",
            type: "string",
          },
          {
            name: "aLink",
            type: "string",
          },
          {
            name: "aVote",
            type: "u16",
          },
          {
            name: "bName",
            type: "string",
          },
          {
            name: "bLink",
            type: "string",
          },
          {
            name: "bVote",
            type: "u16",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "ImbalancedDistribution",
      msg: "Total distribution must be 100",
    },
  ],
};
