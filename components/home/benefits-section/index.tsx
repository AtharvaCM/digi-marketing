import { Box, Card, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import { BsFillBadge3dFill } from 'react-icons/bs';
import { FaGlobeAsia, FaUsers } from 'react-icons/fa';
import { MdLooksOne } from 'react-icons/md';

import styles from './benefits-section.module.scss';

export interface IBenefitsSectionProps {}

export default function BenefitsSection(_props: IBenefitsSectionProps) {
  // TODO: Add popup animation for the cards with GSAP
  return (
    <Section id="benefits-section" className={cx(styles['d-section'])}>
      <Box className={cx(styles['d-section__container'])}>
        <Heading as="h3" mb={'6'} size={'8'} weight={'light'} className={cx(styles['d-section__heading'])}>
          We Can Improve Your Business Performance And Gain More Customers
        </Heading>
        <Grid columns={{ initial: '1', md: '2' }} gap={'7'}>
          {/* Card 1 */}
          <Card variant="surface" className={cx(styles['d-section__card'])}>
            <Flex gap={'6'} p={'4'}>
              {/* Col 1 */}
              <Box className={cx(styles['d-section__icon-wrapper'])}>
                <FaUsers className={cx(styles['d-section__icon'])} />
              </Box>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Text as="div" size={'5'} weight={'bold'} mb={'3'}>
                  Experienced Team
                </Text>
                <Text as="div" size={'4'}>
                  We have an experienced team of professionals and the total experience of the team is 72 years.
                </Text>
              </Box>
            </Flex>
          </Card>

          {/* Card 2 */}
          <Card variant="surface" className={cx(styles['d-section__card'])}>
            <Flex gap={'6'} p={'4'}>
              {/* Col 1 */}
              <Box className={cx(styles['d-section__icon-wrapper'])}>
                <BsFillBadge3dFill className={cx(styles['d-section__icon'])} />
              </Box>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Text as="div" size={'5'} weight={'bold'} mb={'3'}>
                  3D Services
                </Text>
                <Text as="div" size={'4'}>
                  We provide a 3D website and 3D Animation along with all the other services needed for a business to grow online.
                </Text>
              </Box>
            </Flex>
          </Card>

          {/* Card 3 */}
          <Card variant="surface" className={cx(styles['d-section__card'])}>
            <Flex gap={'6'} p={'4'}>
              {/* Col 1 */}
              <Box className={cx(styles['d-section__icon-wrapper'])}>
                <MdLooksOne className={cx(styles['d-section__icon'])} />
              </Box>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Text as="div" size={'5'} weight={'bold'} mb={'3'}>
                  One-Stop Solution
                </Text>
                <Text as="div" size={'4'}>
                  We are your one-stop solution for websites, social media, and anything online.
                </Text>
              </Box>
            </Flex>
          </Card>

          {/* Card 4 */}
          <Card variant="surface" className={cx(styles['d-section__card'])}>
            <Flex gap={'6'} p={'4'}>
              {/* Col 1 */}
              <Box className={cx(styles['d-section__icon-wrapper'])}>
                <FaGlobeAsia className={cx(styles['d-section__icon'])} />
              </Box>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Text as="div" size={'5'} weight={'bold'} mb={'3'}>
                  Global Reach
                </Text>
                <Text as="div" size={'4'}>
                  Our services have been availed by prominent organizations in India and across the globe.
                </Text>
              </Box>
            </Flex>
          </Card>
        </Grid>
      </Box>
    </Section>
  );
}
