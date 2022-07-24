import user from '../../allData/user.json';
import data from "../../allData/statistics.json"
import friends from "../../allData/friends.json"
import transactions from "../../allData/transactions.json"
import {TransactionHistory} from "../TransactionHistory/TransactionHistory"
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from "../FriendList/FriendList"
import styles from './App.module.css';
export const App = () => {
  return (
    <div className={styles.app}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </div>
  );
};
