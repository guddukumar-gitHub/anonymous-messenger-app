import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verify your email</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here is your verification code</Preview>

      <Section style={{ backgroundColor: '#f3f6f9', padding: '40px 0' }}>
        <Section style={{ maxWidth: 600, margin: '0 auto', background: '#ffffff', borderRadius: 8, padding: 24 }}>
          <Row>
            <Heading as="h1" style={{ margin: 0, fontSize: 22 }}>Verify your email</Heading>
          </Row>

          <Row>
            <Text style={{ color: '#6b7280', fontSize: 14, marginTop: 8 }}>
              Hello {username},
            </Text>
          </Row>

          <Row>
            <Text style={{ color: '#374151', fontSize: 15, lineHeight: '20px', marginTop: 12 }}>
              Thanks for signing up — use the code below to verify your account. This code
              will expire in a few minutes.
            </Text>
          </Row>

          <Section style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
            <Text
              style={{
                background: '#0f172a',
                color: '#ffffff',
                padding: '12px 18px',
                borderRadius: 6,
                fontSize: 20,
                letterSpacing: '4px',
                fontWeight: 700,
              }}
            >
              {otp}
            </Text>
          </Section>

          <Section style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <Button
              href={`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/verify/${encodeURIComponent(
                username
              )}`}
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                borderRadius: 6,
                padding: '10px 18px',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Verify your account
            </Button>
          </Section>

          <Row>
            <Text style={{ color: '#6b7280', fontSize: 13, marginTop: 18 }}>
              Or paste this link into your browser:
            </Text>
          </Row>

          <Row>
            <Text style={{ wordBreak: 'break-all', fontSize: 13 }}>
              {process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/verify/{username}
            </Text>
          </Row>

          <Row>
            <Text style={{ color: '#9ca3af', fontSize: 13, marginTop: 18 }}>
              If you did not request this, you can safely ignore this email.
            </Text>
          </Row>
        </Section>
      </Section>
    </Html>
  );
}