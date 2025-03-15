'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import { LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram, FaTelegram } from 'react-icons/fa';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

import contactFormSchema from './contact-form.schema';
import styles from './contact-form-section.module.scss';

interface IContactFormSectionProps {
  id: string;
}

const ContactFormSection: FC<IContactFormSectionProps> = ({ id }) => {
  const defaultFormValues = {
    cname: '',
    email: '',
    phone: '',
    message: '',
    subscribe_be36b12536b6_46315: '',
  };

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultFormValues,
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Do something with the form values.
    const url = 'https://formkeep.com/f/be36b12536b6';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        Accept: 'application/javascript',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        toast({
          title: 'Form submitted successfully!',
        });
        form.reset();
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        toast({
          title: 'Error submitting the form. Please try again.',
          variant: 'destructive',
        });
      });
    // ✅ This will be type-safe and validated.
  }

  return (
    <Section className={cx(styles['d-section'])} id={id}>
      <div className={cx(styles['d-section__container'])}>
        {/* Form */}
        <Box className={cx(styles['d-section__form-container'])}>
          <Heading as="h3" className={cx(styles['d-section__form-heading'])}>
            Message Us
          </Heading>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={styles['d-section__contact-form']}>
              <div className={cx(styles['d-section__form-fields-row'])}>
                <div className={cx(styles['d-section__form-fields-col'])}>
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="cname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Username</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} required />
                        </FormControl>
                        <FormDescription>This is your name.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className={cx(styles['d-section__form-fields-col'])}>
                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="9876456785" {...field} required />
                        </FormControl>
                        <FormDescription>This is your phone number.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className={cx(styles['d-section__form-fields-row'])}>
                <div className={cx(styles['d-section__form-fields-col'])}>
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="name@example.com" {...field} required />
                        </FormControl>
                        <FormDescription>This is your email id.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className={cx(styles['d-section__form-fields-row'])}>
                <div className={cx(styles['d-section__form-fields-col'])}>
                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Write to us" className="resize-none" {...field} required />
                        </FormControl>
                        <FormDescription>
                          You can <span>@mention</span> other users and organizations.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className={cx(styles['d-section__form-fields-row'])}>
                <div className={cx(styles['d-section__form-fields-col'])}>
                  {/* Spam filter hidden field */}
                  <FormField
                    control={form.control}
                    name="subscribe_be36b12536b6_46315"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary hidden">Hidden Field</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} hidden />
                        </FormControl>
                        <FormDescription className="hidden">Hidden field to filter spam submissions.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className={cx(styles['d-section__form-submit-wrapper'])}>
                <Button type="submit" size={'lg'}>
                  Send Us Email
                </Button>
              </div>
            </form>
          </Form>
        </Box>
        {/* Contact Info */}
        <Box className={cx(styles['d-section__info-container'])}>
          <Box className={cx(styles['d-section__info-block'])}>
            <Heading as="h4" className={cx(styles['d-section__info-title'])}>
              General Inquiries
            </Heading>
            <Box className={cx(styles['d-section__info-links'])}>
              <Box className={cx(styles['d-section__info-link'])}>
                <Link href={'mailto:info@growthstats.io'}>
                  <div className="flex gap-2">
                    <MailIcon />
                    <Text as="p" size={'5'}>
                      info@growthstats.io
                    </Text>
                  </div>
                </Link>
              </Box>
              <Box className={cx(styles['d-section__info-link'])}>
                <Link href={'tel:876-876-7654'}>
                  <div className="flex gap-2">
                    <PhoneIcon />
                    <Text as="p" size={'5'}>
                      +91 9156409994
                    </Text>
                  </div>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className={cx(styles['d-section__info-block'])}>
            <Heading as="h4" className={cx(styles['d-section__info-title'])}>
              Social
            </Heading>
            <Box className={cx(styles['d-section__social-links'])}>
              <Link href={'https://www.linkedin.com/company/growth-stats/'} target="_blank" aria-label="LinkedIn">
                <div className="flex gap-2">
                  <LinkedinIcon width={28} height={28} />
                </div>
              </Link>
              <Link href={'https://x.com/growthstatss'} target="_blank" aria-label="TwitterX">
                <div className="flex gap-2">
                  <BsTwitterX width={28} height={28} fontSize={28} />
                </div>
              </Link>
              <Link href={'https://www.facebook.com/profile.php?id=61562893092078'} target="_blank" aria-label="Facebook">
                <div className="flex gap-2">
                  <FaFacebookSquare width={28} height={28} fontSize={28} />
                </div>
              </Link>
              <Link href={'https://www.instagram.com/growth.stats/'} target="_blank" aria-label="Instagram">
                <div className="flex gap-2">
                  <FaInstagram width={28} height={28} fontSize={28} />
                </div>
              </Link>
              <Link href={'http://t.me/Growthstats'} target="_blank" aria-label="Instagram">
                <div className="flex gap-2">
                  <FaTelegram width={28} height={28} fontSize={28} />
                </div>
              </Link>
            </Box>
          </Box>
          <Box className={cx(styles['d-section__info-block'])}>
            <Heading as="h4" className={cx(styles['d-section__info-title'])}>
              Location
            </Heading>
            <Box className={cx(styles['d-section__info-address'])}>
              <Text as="p" size={'5'}>
                B.T Kawade Road, Sai Sulochana, opposite to shirke company, Ganesh Nagar, Ghorpadi, Pune, Maharashtra 411036
              </Text>
            </Box>
          </Box>
        </Box>
      </div>
    </Section>
  );
};

export default ContactFormSection;
