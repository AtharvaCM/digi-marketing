import { Box, Card, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import { BsFillBadge3dFill } from 'react-icons/bs';
import { FaGlobeAsia, FaUsers } from 'react-icons/fa';
import { MdLooksOne } from 'react-icons/md';

import styles from './benefits-section.module.scss';

export interface IBenefitsSectionProps {
  id: string;
}

export default function BenefitsSection({ id }: IBenefitsSectionProps) {
  return (
    <Section size={'3'} className={cx(styles['d-section'])} id={id}>
      <Box className={cx(styles['d-section__container'])}>
        <Heading as="h3" mb={'6'} size={{ initial: '6', md: '8' }} weight={'light'} className={cx(styles['d-section__heading'])}>
          We Can Improve Your Business Performance And Gain More Customers
        </Heading>
        <Grid columns={{ initial: '1', sm: '2' }} gap={'7'}>
          {/* Card 1 */}
          <Card variant="surface" className={cx(styles['d-section__card'])}>
            <Flex gap={'6'} mb={'4'} align={'center'}>
              {/* Col 1 */}
              <Box className={cx(styles['d-section__icon-wrapper'])}>
                <FaUsers className={cx(styles['d-section__icon'])} />
              </Box>
              {/* Col 2 */}
              <Heading as="h4" size={'5'} weight={'bold'}>
                Experienced Team
              </Heading>
            </Flex>
            <Text as="div" size={'4'}>
              We have an experienced team of professionals and the total experience of the team is 7 years.
            </Text>
          </Card>

          {/* Card 2 */}
          <Card variant="surface" className={cx(styles['d-section__card'])}>
            <Flex gap={'6'} mb={'4'} align={'center'}>
              {/* Col 1 */}
              <Box className={cx(styles['d-section__icon-wrapper'])}>
                <BsFillBadge3dFill className={cx(styles['d-section__icon'])} />
              </Box>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Heading as="h4" size={'5'} weight={'bold'} mb={'3'}>
                  3D Services
                </Heading>
              </Box>
            </Flex>
            <Text as="div" size={'4'}>
              We provide a 3D website and 3D Animation along with all the other services needed for a business to grow online.
            </Text>
          </Card>

          {/* Card 3 */}
          <Card variant="surface" className={cx(styles['d-section__card'])}>
            <Flex gap={'6'} mb={'4'} align={'center'}>
              {/* Col 1 */}
              <Box className={cx(styles['d-section__icon-wrapper'])}>
                <MdLooksOne className={cx(styles['d-section__icon'])} />
              </Box>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Heading as="h4" size={'5'} weight={'bold'} mb={'3'}>
                  One-Stop Solution
                </Heading>
              </Box>
            </Flex>
            <Text as="div" size={'4'}>
              We are your one-stop solution for websites, social media, and anything online.
            </Text>
          </Card>

          {/* Card 4 */}
          <Card variant="surface" className={cx(styles['d-section__card'])}>
            <Flex gap={'6'} mb={'4'} align={'center'}>
              {/* Col 1 */}
              <Box className={cx(styles['d-section__icon-wrapper'])}>
                <FaGlobeAsia className={cx(styles['d-section__icon'])} />
              </Box>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Heading as="h4" size={'5'} weight={'bold'} mb={'3'}>
                  Global Reach
                </Heading>
              </Box>
            </Flex>
            <Text as="div" size={'4'}>
              Our services have been availed by prominent organizations in India and across the globe.
            </Text>
          </Card>
        </Grid>
      </Box>
    </Section>
  );
}
