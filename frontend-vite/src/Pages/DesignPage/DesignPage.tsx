import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData';


type Props = {}
const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

const DesignPage = (props: Props) => {
  return (<>
  <h1> FinShark Design page</h1>
  <h2> This page has all the information about design</h2>
  <RatioList data = {testIncomeStatementData} config = {tableConfig} />
  <Table/>
  </>

  )
}

export default DesignPage