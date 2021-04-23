import eel,subprocess,psutil,requests,serial
from datetime import datetime
from serial.tools import list_ports
from time import sleep

@eel.expose
def naming(file_name):
    global prefix
    prefix = file_name

# @eel.expose
# def get_com():
#     """
#     COM情報取得
#     """
#     com = None
#     ports = list_ports.comports()
#     for info in ports:
#         if 'USB Serial Port' in info[1]:
#             com = info[0]
#     return com
#
# def access_check(com):
#     try:
#         ser = serial.Serial(com)
#         ser.close()
#         return True
#     except:
#         return False

# @eel.expose
# def device_check():
#     """
#     デバイス接続確認
#     """
#     com = get_com()
#     if not get_com() or not access_check(com):
#         return False
#     else:
#         return True

# @eel.expose
# def record_agreement(file_name, name):
#     """
#     同意記録
#     """
#     dt_now = datetime.now()
#     with open('data/{}_BPQ_agreement.csv'.format(file_name), 'a') as f:
#         f.write('{},{}\n'.format(name, dt_now))

@eel.expose
def record_answer_time(survey_id, category, question, value, elapsed_ms):
    """
    回答時間記録
    """
    with open('data/{}_{}_answer_time.csv'.format(prefix, survey_id), 'a') as f:
        f.write('{},{},{},{}\n'.format(category, question, value, elapsed_ms))

@eel.expose
def record_score(survey_id, total):
    """
    スコア時間記録
    """
    dt_now = datetime.now()
    dt = dt_now.strftime("%Y/%m/%d %H:%M:%S")
    with open('data/{}_{}_answer_time.csv'.format(prefix, survey_id), 'a') as f:
        f.write('score,{},datetime,{}\n'.format(total,dt))

@eel.expose
def next_q():
    eel.start("mainJIAT.html", disable_cache=True)


# @eel.expose
# def record_pulse(personal_code):
#     """
#     脈波データ記録
#      """
#     com = None
#     ports = list_ports.comports()
#     for info in ports:
#         if 'USB Serial Port' in info[1]:
#             com = info[0]
#     global proc
#     proc = subprocess.Popen(
#         ["IWS920Command.exe", "/port", com, "/raw", ">", 'data/{}_pulse_data.txt'.format(personal_code)],
#         stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)

# @eel.expose
# def stop_recording():
#     """
#     記録終了
#     """
#     global proc
#     process = psutil.Process(proc.pid)
#     for proc in process.children(recursive=True):
#         proc.kill()
#     process.kill()

# @eel.expose
# def post_recorded_files(file_name):
#     """
#     記録データポスト
#     """
#     url = 'https://cloud.bmk.hiroshima-u.ac.jp/remote.php/dav/files/fc84411e-fa2b-103a-98c8-2970a9af346f/LabExp/BPQ/'
#     id = 'dcnlabexp'
#     pswd = 'I80rD0Ke5ep_'
#     file0 = {
#         'agreement': open('data/{}_BPQ_agreement.csv'.format(file_name), 'rb')
#             }
#     end_point = url + file_name + '_BPQ_agreement.csv'
#     res = requests.put(end_point, auth=(id, pswd), files=file0)
#     file = {
#        'answer_time': open('data/{}_BPQ_answer_time.csv'.format(file_name), 'rb')
#         }
#     end_point = url + file_name + '_BPQ_answer_time.csv'
#     res = requests.put(end_point, auth=(id, pswd), files=file)

web_app_options = {
    "mode": "chrome-app",
    "port": 8080,
    "chromeFlags": ["--start-fullscreen"]
}
eel.init("web")
eel.start("main.html", disable_cache=True)
#eel.start("main.html", options=web_app_options)
