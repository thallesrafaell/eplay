import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'
import boleto from '../../assets/images/barcode.png'
import cartao from '../../assets/images/credit-card.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(true)

  return (
    <div className="container">
      <>
        <Card title="Dados de Cobrança">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome Completo</label>
                <input id="fullName" type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input id="cpf" type="number" />
              </InputGroup>
            </Row>
            <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input id="deliveryEmail" type="email" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="confirmDeliveryEmail">Confirme o Email</label>
                <input id="confirmDeliveryEmail" type="email" />
              </InputGroup>
            </Row>
          </>
        </Card>
        <Card title="Pagamento">
          <>
            <TabButton
              isActive={!payWithCard}
              onClick={() => setPayWithCard(false)}
            >
              <img src={boleto} alt="Boleto Bancário" />
              Boleto Bancário
            </TabButton>
            <TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
            >
              <img src={cartao} alt="Cartão de crédito" />
              Cartão de crédito
            </TabButton>

            <div className="margin-top">
              {!payWithCard ? (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              ) : (
                <>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardOwner">
                        Nome do titular do cartão
                      </label>
                      <input type="text" id="cardOwner" />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfCardOwner">
                        CPF do Titular Cartão
                      </label>
                      <input id="cpfCardOwner" type="number" />
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup>
                      <label htmlFor="cardDisplayName">Nome no Cartão</label>
                      <input type="text" id="cardDisplayName" />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="CardNumber">Número do Cartão</label>
                      <input id="CardNumber" type="number" />
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expireMonth">Mes do Vencimento</label>
                      <input id="expireMonth" type="number" />
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expireYear">Ano do vencimento</label>
                      <input id="expireYear" type="number" />
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input id="cardCode" type="number" />
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup maxWidth="158px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select name="" id="">
                        <option value="">1x de R$ 300,00</option>
                        <option value="">2x de R$ 150,00</option>
                        <option value="">3x de R$ 100,00</option>
                      </select>
                    </InputGroup>
                  </Row>
                </>
              )}
            </div>
          </>
        </Card>
        <Button type="button" title="Clique aqui para finalizar a compra">
          Finalizar a Compra
        </Button>
      </>
    </div>
  )
}

export default Checkout
