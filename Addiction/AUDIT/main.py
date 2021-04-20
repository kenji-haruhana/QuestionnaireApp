import eel,subprocess,psutil,requests,serial
from datetime import datetime
from serial.tools import list_ports
from time import sleep

# @eel.expose
# def record_agreement(file_name, name):
#     """
#     同意記録
#     """
#     dt_now = datetime.now()
#     with open('data/{}_AUDIT20_agreement.csv'.format(file_name), 'a') as f:
#         f.write('{},{}\n'.format(name, dt_now))

@eel.expose
def record_answer_time(personal_code, category, question, value, elapsed_ms):
    """
    回答時間記録
    """
    with open('data/{}_AUDIT20_answer_time.csv'.format(personal_code), 'a') as f:
        f.write('{},{},{},{}\n'.format(category, question, value, elapsed_ms))

@eel.expose
def record_score(personal_code, total):
    """
    スコア時間記録
    """
    dt_now = datetime.now()
    dt = dt_now.strftime("%Y/%m/%d %H:%M:%S")
    with open('data/{}_AUDIT20_answer_time.csv'.format(personal_code), 'a') as f:
        f.write('score,{},datetime,{}\n'.format(total,dt))


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
# def record_disagree(personal_code, getter, reason):
#     """
#     同意をもらえなかった理由
#     """
#     with open('data/disagree_reasons.csv', 'a') as f:
#         date = datetime.today().strftime('%Y/%m/%d %H:%M:%S')
#         f.write('{},{},{},{}\n'.format(date, getter, personal_code, reason))

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
#     url = 'https://cloud.bmk.hiroshima-u.ac.jp/remote.php/dav/files/fc84411e-fa2b-103a-98c8-2970a9af346f/LabExp/AUDIT20/'
#     id = 'dcnlabexp'
#     pswd = 'I80rD0Ke5ep_'
#     file0 = {
#         'agreement': open('data/{}_AUDIT20_agreement.csv'.format(file_name), 'rb')
#             }
#     end_point = url + file_name + '_AUDIT20_agreement.csv'
#     res = requests.put(end_point, auth=(id, pswd), files=file0)
#     file = {
#        'answer_time': open('data/{}_AUDIT20_answer_time.csv'.format(file_name), 'rb')
#         }
#     end_point = url + file_name + '_AUDIT20_answer_time.csv'
#     res = requests.put(end_point, auth=(id, pswd), files=file)

web_app_options = {
    "mode": "chrome-app",
    "port": 8080,
    "chromeFlags": ["--start-fullscreen"]
}
eel.init("web")
eel.start("main.html", disable_cache=True)
#eel.start("main.html", options=web_app_options)
