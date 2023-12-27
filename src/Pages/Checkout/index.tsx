import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Button from '../../components/Button'
import Card from '../../components/Card'

import barCode from '../../assets/images/barcode.png'
import creditCard from '../../assets/images/credit-card.png'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expireMonth: '',
      expireYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo meno 5 caracteres.')
        .required('Este campo e obrigatório..'),
      email: Yup.string()
        .email('E-mail inválido.')
        .required('Este campo e obrigatório.'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido.')
        .required('Este campo e obrigatório.'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes.')
        .required('Este campo e obrigatório.'),

      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres.')
        .max(14, 'O campo precisa ter 14 caracteres.')
        .required('Este campo e obrigatório.'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo e Obrigatório.') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo e Obrigatório.') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo e Obrigatório.') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo e Obrigatório.') : schema
      ),
      expireMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo e Obrigatório.') : schema
      ),
      expireYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo e Obrigatório.') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo e Obrigatório.') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          name: values.fullName,
          email: values.email
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: [{ id: 1, price: 10 }]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito Obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br /> Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Catão de crédito' : 'Boleto bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <>
            <Card title="Dados de Cobrança">
              <>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="fullName">Nome Completo</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('fullName', form.errors.fullName)}
                    </small>
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.values.email}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>{getErrorMessage('email', form.errors.email)}</small>
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cpf">CPF</label>
                    <input
                      id="cpf"
                      type="text"
                      name="cpf"
                      value={form.values.cpf}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
                  </S.InputGroup>
                </S.Row>
                <h3 className="margin-top">
                  Dados de entrega - conteúdo digital
                </h3>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="deliveryEmail">E-mail</label>
                    <input
                      id="deliveryEmail"
                      type="email"
                      name="deliveryEmail"
                      value={form.values.deliveryEmail}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage(
                        'deliveryEmail',
                        form.errors.deliveryEmail
                      )}
                    </small>
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="confirmDeliveryEmail">
                      Confirme o Email
                    </label>
                    <input
                      id="confirmDeliveryEmail"
                      type="email"
                      name="confirmDeliveryEmail"
                      value={form.values.confirmDeliveryEmail}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage(
                        'confirmDeliveryEmail',
                        form.errors.confirmDeliveryEmail
                      )}
                    </small>
                  </S.InputGroup>
                </S.Row>
              </>
            </Card>
            <Card title="Pagamento">
              <>
                <S.TabButton
                  type="button"
                  isActive={!payWithCard}
                  onClick={() => setPayWithCard(false)}
                >
                  <img src={barCode} alt="Boleto Bancário" />
                  Boleto Bancário
                </S.TabButton>
                <S.TabButton
                  type="button"
                  isActive={payWithCard}
                  onClick={() => setPayWithCard(true)}
                >
                  <img src={creditCard} alt="Cartão de crédito" />
                  Cartão de crédito
                </S.TabButton>

                <div className="margin-top">
                  {!payWithCard ? (
                    <p>
                      Ao optar por essa forma de pagamento, é importante lembrar
                      que a confirmação pode levar até 3 dias úteis, devido aos
                      prazos estabelecidos pelas instituições financeiras.
                      Portanto, a liberação do código de ativação do jogo
                      adquirido ocorrerá somente após a aprovação do pagamento
                      do boleto.
                    </p>
                  ) : (
                    <>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="cardOwner">
                            Nome do titular do cartão
                          </label>
                          <input
                            type="text"
                            id="cardOwner"
                            name="cardOwner"
                            value={form.values.cardOwner}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                          />
                          <small>
                            {getErrorMessage(
                              'cardOwner',
                              form.errors.cardOwner
                            )}
                          </small>
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="cpfCardOwner">
                            CPF do Titular Cartão
                          </label>
                          <input
                            id="cpfCardOwner"
                            type="text"
                            name="cpfCardOwner"
                            value={form.values.cpfCardOwner}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                          />
                          <small>
                            {getErrorMessage(
                              'cpfCardOwner',
                              form.errors.cpfCardOwner
                            )}
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.Row margintop="24px">
                        <S.InputGroup>
                          <label htmlFor="cardDisplayName">
                            Nome no Cartão
                          </label>
                          <input
                            type="text"
                            id="cardDisplayName"
                            name="cardDisplayName"
                            value={form.values.cardDisplayName}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                          />
                          <small>
                            {getErrorMessage(
                              'cardNumber',
                              form.errors.cardNumber
                            )}
                          </small>
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="CardNumber">Número do Cartão</label>
                          <input
                            id="cardNumber"
                            type="text"
                            name="cardNumber"
                            value={form.values.cardNumber}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                          />
                        </S.InputGroup>
                        <S.InputGroup maxwidth="123px">
                          <label htmlFor="expireMonth">Mes do Vencimento</label>
                          <input
                            id="expireMonth"
                            type="text"
                            name="expireMonth"
                            value={form.values.expireMonth}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                          />
                          <small>
                            {getErrorMessage(
                              'expireMonth',
                              form.errors.expireMonth
                            )}
                          </small>
                        </S.InputGroup>
                        <S.InputGroup maxwidth="123px">
                          <label htmlFor="expireYear">Ano do vencimento</label>
                          <input
                            id="expireYear"
                            type="text"
                            name="expireYear"
                            value={form.values.expireYear}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                          />
                          <small>
                            {getErrorMessage(
                              'expireYear',
                              form.errors.expireYear
                            )}
                          </small>
                        </S.InputGroup>
                        <S.InputGroup maxwidth="48px">
                          <label htmlFor="cardCode">CVV</label>
                          <input
                            type="text"
                            id="cardCode"
                            name="cardCode"
                            value={form.values.cardCode}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                          />
                          <small>
                            {getErrorMessage('cardCode', form.errors.cardCode)}
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.Row margintop="24px">
                        <S.InputGroup maxwidth="158px">
                          <label htmlFor="installments">Parcelamento</label>
                          <select
                            id="installments"
                            name="installments"
                            value={form.values.cardNumber}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                          >
                            <option value="">1x de R$ 300,00</option>
                            <option value="">2x de R$ 150,00</option>
                            <option value="">3x de R$ 100,00</option>
                          </select>
                          <small>
                            {getErrorMessage(
                              'installments',
                              form.errors.installments
                            )}
                          </small>
                        </S.InputGroup>
                      </S.Row>
                    </>
                  )}
                </div>
              </>
            </Card>
            <Button
              onClick={form.handleSubmit}
              type="button"
              title="Clique aqui para finalizar a compra"
            >
              Finalizar a Compra
            </Button>
          </>
        </form>
      )}
    </div>
  )
}

export default Checkout
