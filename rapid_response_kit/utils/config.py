try:
   import local_config
except:
    try:
      import os
      SECRET_KEY = os.environ['SECRET_KEY']
      TWILIO_ACCOUNT_SID = os.environ['TWILIO_ACCOUNT_SID']
      TWILIO_AUTH_TOKEN = os.environ['TWILIO_AUTH_TOKEN']
      GOOGLE_ACCOUNT_USER = os.environ['ameecova@gmail.com']
      GOOGLE_ACCOUNT_PASS = os.environ['chueca14']
      PUSHER_APP_ID = os.environ['679801']
      PUSHER_KEY = os.environ['37835498671b338f0ca2']
      PUSHER_SECRET = os.environ['5b5478d14de76efcc358']
      FIREBASE_URL = os.environ['eventemergencysystem']
      FIREBASE_SECRET = os.environ['OKhhcaGioVaLCjEduUghtmDc23d9mYKBE9Z0ns65']
    except:
        pass


# Configuration Auto-generated during installation
SECRET_KEY = '{u\xa5\x02\x06\x0c[\t\xf7\x88\x87\xba\xcf8ATJ\\\x06\x1e'
TWILIO_ACCOUNT_SID = 'AC1870545b1326ed4351430a0b8bbaa40e'
TWILIO_AUTH_TOKEN = '9e0ede19372ec90f199b945a4d8407d7'

# Configuration Auto-generated during installation
SECRET_KEY = 'P\xae\xee\xbe\x14*\xbe\x98W\x82\xc5\xee\xb8z\x97\x16\xb2\xa0}]'
TWILIO_ACCOUNT_SID = 'AC1870545b1326ed4351430a0b8bbaa40e'
TWILIO_AUTH_TOKEN = '9e0ede19372ec90f199b945a4d8407d7'