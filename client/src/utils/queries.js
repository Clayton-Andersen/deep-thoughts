import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
query thoughts($username: String) {
    thoughts(usename: $username) {
        _id
        thoughtText
        createdAt
        username
        reactionCount
        reactions {
            _if
            createdAt
            username
            reactionBody
        }
    }
}
`;