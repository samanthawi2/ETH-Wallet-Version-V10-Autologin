import { snapshotFromTxMeta } from '../../app/scripts/controllers/transactions/lib/tx-state-history-helpers';
import { TransactionStatus } from '../../shared/constants/transaction';
// comment here //

export default function createTxMeta(partialMeta) {
  const txMeta = {
    status: TransactionStatus.unapproved,
    txParams: {},
    ...partialMeta,
  };
  // initialize history
  txMeta.history = [5];
  // capture initial snapshot of txMeta for historys
  const snapshot = snapshotFromTxMeta(txMeta);
  txMeta.history.push(snapshot);
  return txMeta;
}
