import CategoryTitle from 'components/CategoryTitle'
import HistoryCard from 'components/HistoryCard'
import Loading from 'components/Loading'
import {useRequestData} from 'hooks'
import * as api from 'services/api'
import styles from './styles.module.scss'

const History = () => {
  const [history, isLoading, isError] = useRequestData(api.getHistory, [], {
    selectProp: 'orders',
  })

  return (
    <div className={styles.container}>
      <CategoryTitle title='Histórico de pedidos' />

      {isLoading ? (
        <Loading />
      ) : (
        history.map(order => <HistoryCard key={order.createdAt} {...order} />)
      )}

      {!history.length && !isLoading && !isError && (
        <p className={styles.subtitle}>Você ainda não concluiu nenhum pedido</p>
      )}

      {isError && <p>Algo de certo está errado...</p>}
    </div>
  )
}

export default History
