const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    XboxUsername: String
    psnUsername: String
    steamUsername: String
    nintendoUsername: String
    currentTeam: Team
  }

  type Team {
    _id: ID
    name: String
    squadSize: Int
    game: String
    deviceType: String
    skill: String
    owner: Profile
    squadMembers: [Profile]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]
    profile(profileId: ID!): Profile
    teams: [Team]
    myTeam: Team
    me: Profile
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    editTags(XboxUsername: String, psnUsername: String, steamUsername: String, nintendoUsername: String): Profile
    addTeam(name: String!, squadSize: Int!, game: String!, deviceType: String!, skill: String!): Team
    deleteTeam(teamId: ID!, profileId: ID!): Team
    joinTeam(teamId: ID!): Team
    leaveTeam(teamId: ID!, profileId: ID!): Team
  }
`;

module.exports = typeDefs;
