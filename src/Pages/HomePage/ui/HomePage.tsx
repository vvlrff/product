import { Step, Stepper } from 'Shared/ui/Stepper'
import { Layout } from 'Widgets'

const HomePage: React.FC = () => {
  return (
      <Layout>
          <Stepper>
              <Step
                  primarySideContent={{
                    subtitle: '12 October',
                    title: 'Step heading',
                    info: 'ITMO Fellowship and Professorship Program aims to provide outstanding researchers and '
                  }}
                  secondarySideContent={{
                    title: 'Step heading',
                    subtitle: '12 October',
                    info: 'ITMO Fellowship and Professorship Program aims to provide outstanding researchers and '
                  }}
              >34</Step>
              <Step
                  primarySideContent={{
                    subtitle: '12 October',
                    title: 'Step heading',
                    info: 'ITMO Fellowship and Professorship Program aims to provide outstanding researchers and '
                  }}
                  secondarySideContent={{
                    title: 'Step heading',
                    subtitle: '12 October',
                    info: 'ITMO Fellowship and Professorship Program aims to provide outstanding researchers and '
                  }}
              >56</Step>
              <Step
                  primarySideContent={{
                    subtitle: '12 October',
                    title: 'Step heading',
                    info: 'ITMO Fellowship and Professorship Program aims to provide outstanding researchers and '
                  }}
                  secondarySideContent={{
                    title: 'Step heading',
                    subtitle: '12 October',
                    info: 'ITMO Fellowship and Professorship Program aims to provide outstanding researchers and '
                  }}
              >45</Step>
          </Stepper>
      </Layout>
  )
}

export default HomePage
